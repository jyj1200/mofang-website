import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-3f503f37/health", (c) => {
  return c.json({ status: "ok" });
});

// Submit industrial design inquiry
app.post("/make-server-3f503f37/submit-industrial-inquiry", async (c) => {
  try {
    const data = await c.req.json();
    console.log("Received industrial inquiry:", data);

    // Validate required fields
    if (!data.name || !data.company || !data.phone || !data.productType || !data.requirements) {
      return c.json({ error: "缺少必填字段" }, 400);
    }

    // Generate unique ID for this inquiry
    const inquiryId = `industrial_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store inquiry in KV store
    await kv.set(inquiryId, {
      type: "industrial",
      ...data,
      submittedAt: new Date().toISOString(),
    });

    // Send email notification
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      console.log("Data saved to database, but email notification skipped");
      return c.json({
        success: true,
        message: "您的咨询已提交，我们会尽快与您联系",
        inquiryId,
        warning: "邮件通知服务暂时不可用"
      });
    }

    console.log("Attempting to send email with API key:", resendApiKey.substring(0, 10) + "...");

    const emailContent = `
      <h2>新的工业设计咨询需求</h2>
      <p><strong>提交时间：</strong>${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
      <hr/>
      <h3>客户信息</h3>
      <p><strong>姓名：</strong>${data.name}</p>
      <p><strong>企业名称：</strong>${data.company}</p>
      <p><strong>所属行业：</strong>${data.industry || '未填写'}</p>
      <p><strong>联系电话：</strong>${data.phone}</p>
      <p><strong>电子邮箱：</strong>${data.email || '未填写'}</p>
      <hr/>
      <h3>项目信息</h3>
      <p><strong>产品类型：</strong>${data.productType}</p>
      <p><strong>项目阶段：</strong>${data.projectStage || '未填写'}</p>
      <p><strong>项目周期：</strong>${data.timeline || '未填写'}</p>
      <p><strong>预算范围：</strong>${data.budget || '未填写'}</p>
      <hr/>
      <h3>需求详情</h3>
      <p>${data.requirements.replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p style="color: #666; font-size: 12px;">咨询ID: ${inquiryId}</p>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "墨方智能科技 <onboarding@resend.dev>",
        to: ["337839167@qq.com"],
        subject: `【工业设计咨询】${data.company} - ${data.name}`,
        html: emailContent,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Failed to send email. Status:", emailResponse.status);
      console.error("Error response:", errorText);
      // Still return success to user even if email fails
      return c.json({
        success: true,
        message: "您的咨询已提交，我们会尽快与您联系",
        inquiryId,
        warning: "邮件通知发送失败，但数据已保存"
      });
    }

    const emailResult = await emailResponse.json();
    console.log("Email sent successfully:", emailResult);

    return c.json({
      success: true,
      message: "提交成功！我们的工业设计顾问将在24小时内与您联系",
      inquiryId,
    });

  } catch (error) {
    console.error("Error submitting industrial inquiry:", error);
    return c.json({
      error: "提交失败，请稍后重试或直接联系我们",
      details: error.message
    }, 500);
  }
});

// Submit cultural creative inquiry
app.post("/make-server-3f503f37/submit-cultural-inquiry", async (c) => {
  try {
    const data = await c.req.json();
    console.log("Received cultural creative inquiry:", data);

    // Validate required fields
    if (!data.name || !data.phone || !data.productType || !data.description) {
      return c.json({ error: "缺少必填字段" }, 400);
    }

    // Generate unique ID for this inquiry
    const inquiryId = `cultural_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store inquiry in KV store
    await kv.set(inquiryId, {
      type: "cultural",
      ...data,
      submittedAt: new Date().toISOString(),
    });

    // Send email notification
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      console.log("Data saved to database, but email notification skipped");
      return c.json({
        success: true,
        message: "您的咨询已提交，我们会尽快与您联系",
        inquiryId,
        warning: "邮件通知服务暂时不可用"
      });
    }

    console.log("Attempting to send email with API key:", resendApiKey.substring(0, 10) + "...");

    const emailContent = `
      <h2>新的文创产品定制需求</h2>
      <p><strong>提交时间：</strong>${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
      <hr/>
      <h3>客户信息</h3>
      <p><strong>姓名：</strong>${data.name}</p>
      <p><strong>企业/机构名称：</strong>${data.company || '未填写'}</p>
      <p><strong>联系电话：</strong>${data.phone}</p>
      <p><strong>电子邮箱：</strong>${data.email || '未填写'}</p>
      <hr/>
      <h3>产品信息</h3>
      <p><strong>产品类型：</strong>${data.productType}</p>
      <p><strong>定制数量：</strong>${data.quantity || '未填写'}</p>
      <p><strong>预算范围：</strong>${data.budget || '未填写'}</p>
      <p><strong>材质要求：</strong>${data.material || '未填写'}</p>
      <p><strong>交付时间：</strong>${data.deadline || '未填写'}</p>
      <hr/>
      <h3>设计需求</h3>
      <p>${data.description.replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p style="color: #666; font-size: 12px;">咨询ID: ${inquiryId}</p>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "墨方智能科技 <onboarding@resend.dev>",
        to: ["337839167@qq.com"],
        subject: `【文创定制咨询】${data.company || data.name} - ${data.productType}`,
        html: emailContent,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Failed to send email. Status:", emailResponse.status);
      console.error("Error response:", errorText);
      // Still return success to user even if email fails
      return c.json({
        success: true,
        message: "您的咨询已提交，我们会尽快与您联系",
        inquiryId,
        warning: "邮件通知发送失败，但数据已保存"
      });
    }

    const emailResult = await emailResponse.json();
    console.log("Email sent successfully:", emailResult);

    return c.json({
      success: true,
      message: "提交成功！我们的设计顾问将在24小时内与您联系",
      inquiryId,
    });

  } catch (error) {
    console.error("Error submitting cultural inquiry:", error);
    return c.json({
      error: "提交失败，请稍后重试或直接联系我们",
      details: error.message
    }, 500);
  }
});

// Get inquiry by ID (optional, for tracking)
app.get("/make-server-3f503f37/inquiry/:id", async (c) => {
  try {
    const inquiryId = c.req.param("id");
    const inquiry = await kv.get(inquiryId);
    
    if (!inquiry) {
      return c.json({ error: "咨询记录未找到" }, 404);
    }

    return c.json({ inquiry });
  } catch (error) {
    console.error("Error fetching inquiry:", error);
    return c.json({ error: "获取咨询记录失败" }, 500);
  }
});

// Get all inquiries (Admin)
app.get("/make-server-3f503f37/admin/inquiries", async (c) => {
  try {
    // Get all inquiries with "industrial_" prefix
    const industrialInquiries = await kv.getByPrefix("industrial_");
    
    // Get all inquiries with "cultural_" prefix
    const culturalInquiries = await kv.getByPrefix("cultural_");
    
    // Combine and format
    const allInquiries = [
      ...industrialInquiries.map(item => ({ id: item.key, ...item.value })),
      ...culturalInquiries.map(item => ({ id: item.key, ...item.value }))
    ];
    
    // Sort by submission time (newest first)
    allInquiries.sort((a, b) => {
      const dateA = new Date(a.submittedAt).getTime();
      const dateB = new Date(b.submittedAt).getTime();
      return dateB - dateA;
    });

    console.log(`Retrieved ${allInquiries.length} total inquiries`);
    
    return c.json({
      success: true,
      inquiries: allInquiries,
      count: allInquiries.length
    });
  } catch (error) {
    console.error("Error fetching all inquiries:", error);
    return c.json({ 
      error: "获取咨询记录失败",
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);
import { useParams, Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { ArrowLeft, Clock, ThumbsUp, ThumbsDown, ChevronRight, HelpCircle, Mail } from "lucide-react";
import React, { useState } from "react";

const helpArticlesData: Record<string, any> = {
  "getting-started": {
    title: "Getting Started with KIDUART", category: "Getting Started", lastUpdated: "March 1, 2026",
    content: `# Getting Started with KIDUART\n\nWelcome to KIDUART! This guide will walk you through the first steps to set up your school on the platform.\n\n## Step 1: Complete Your School Profile\nAfter your account is activated, go to **Settings > School Profile** and fill in:\n- School name and address\n- Academic year dates\n- School logo and branding\n- Contact information\n\n## Step 2: Set Up Your Academic Structure\nNavigate to **Academics > Structure** to configure:\n- Grade levels (e.g., Grade 1-12, KG1-KG2)\n- Sections per grade (e.g., Section A, B, C)\n- Academic terms (quarters, semesters, trimesters)\n\n## Step 3: Import or Add Students\nYou can either:\n- **Import**: Upload a CSV file with student data (download our template)\n- **Add manually**: Use the Add Student form\n\n## Step 4: Add Staff\nGo to **HR > Staff** to add teachers and support staff. Assign them roles and permissions.\n\n## Step 5: Configure Subjects and Timetable\nSet up your subject catalog, then use the Timetable module to assign teachers to subjects and classes.\n\n## Tips\n- Complete your school profile before adding students\n- Always test with a small group before full rollout\n- Watch the onboarding video (available in Help > Resources)`
  },
  "add-student": {
    title: "How to Add and Manage Students", category: "Student Management", lastUpdated: "February 15, 2026",
    content: `# How to Add and Manage Students\n\nThis article explains how to add new students and manage existing student records in KIDUART.\n\n## Adding a Single Student\n1. Go to **Students > Add Student**\n2. Fill in the required fields: Name, Date of Birth, Grade, Section\n3. Add optional details: Parent information, Medical notes, Previous school\n4. Upload required documents (birth certificate, transfer certificate)\n5. Click **Save Student**\n\n## Bulk Import Students\nFor adding multiple students at once:\n1. Go to **Students > Import**\n2. Download the CSV template\n3. Fill in student data following the template format\n4. Upload the completed CSV\n5. Review the preview and confirm import\n\n## Editing Student Records\n- Find the student using the search bar\n- Click on their name to open the profile\n- Click **Edit** to modify any fields\n- Changes are saved automatically\n\n## Student Status Management\nStudents can have the following statuses:\n- **Active**: Currently enrolled\n- **Inactive**: Temporarily unenrolled\n- **Alumni**: Graduated or transferred out`
  },
  "attendance-setup": {
    title: "Setting Up Attendance Tracking", category: "Account Setup", lastUpdated: "February 10, 2026",
    content: `# Setting Up Attendance Tracking\n\nConfigure KIDUART's attendance system to match your school's policies and workflows.\n\n## Configuring Attendance Settings\n1. Go to **Settings > Attendance**\n2. Set your school's attendance policy:\n   - Working days (Mon-Fri or Mon-Sat)\n   - Class start time\n   - Late arrival threshold (e.g., after 9:00 AM = late)\n3. Enable parent notifications\n4. Configure notification timing (immediate or end-of-day summary)\n\n## Setting Up Teacher Access\nTeachers need permission to mark attendance:\n1. Go to **HR > Staff Roles**\n2. Ensure "Mark Attendance" permission is enabled for Teacher role\n3. Teachers can then access attendance via the KIDUART Teacher App or web portal\n\n## Biometric/RFID Integration\nIf you're using biometric hardware:\n1. Go to **Settings > Hardware Integration**\n2. Select your device type\n3. Follow the device-specific setup guide\n4. Test with a few students before full deployment`
  },
  "generate-reports": {
    title: "Generating Reports and Analytics", category: "Reports & Analytics", lastUpdated: "March 5, 2026",
    content: `# Generating Reports and Analytics\n\nKIDUART offers 50+ pre-built reports and a custom report builder.\n\n## Pre-Built Reports\nAccess the reports library at **Reports > Library**:\n- Student Progress Report\n- Class Performance Summary\n- Attendance Compliance Report\n- Fee Collection Report\n- Staff Attendance Report\n- Academic Performance Trends\n\n## Running a Report\n1. Select report type from the library\n2. Set date range and other filters\n3. Click **Generate**\n4. Preview on screen, then Export as PDF, Excel, or CSV\n\n## Scheduling Automated Reports\nHave reports delivered automatically:\n1. Open any report\n2. Click **Schedule**\n3. Set frequency (daily, weekly, monthly)\n4. Add recipient email addresses\n5. Save schedule\n\n## Custom Report Builder\nFor reports not in the library:\n1. Go to **Reports > Custom Builder**\n2. Select data source (Students, Attendance, Fees, etc.)\n3. Drag and drop fields you want\n4. Apply filters and groupings\n5. Preview and save your custom report`
  },
  "fee-setup": {
    title: "Configuring Fee Management", category: "Account Setup", lastUpdated: "January 30, 2026",
    content: `# Configuring Fee Management\n\nSet up KIDUART's fee module to automate invoicing and payment collection.\n\n## Creating Fee Structures\n1. Go to **Finance > Fee Structures**\n2. Click **Add Fee Structure**\n3. Define fee components:\n   - Tuition Fee\n   - Activity Fee\n   - Transportation (if applicable)\n   - Library Fee\n4. Set payment schedule (monthly, quarterly, annually)\n5. Apply to specific grade levels or all students\n\n## Setting Up Online Payments\n1. Go to **Settings > Payments**\n2. Connect your payment gateway (Stripe, PayPal, or local options)\n3. Enter API credentials\n4. Test with a small payment\n5. Enable for parents in portal settings\n\n## Automating Invoice Generation\n1. Go to **Finance > Settings > Invoicing**\n2. Enable automated invoice generation\n3. Set due dates and reminder schedules\n4. Configure late fee rules if applicable`
  },
  "parent-portal-guide": {
    title: "Guide to the Parent Portal", category: "Getting Started", lastUpdated: "March 8, 2026",
    content: `# Guide to the Parent Portal\n\nHelp your parents get the most out of the KIDUART parent experience.\n\n## Accessing the Parent Portal\nParents can access KIDUART via:\n- **Web**: parent.kiduart.com\n- **Mobile App**: Available on iOS and Android (search "KIDUART Parent")\n\n## Parent Account Setup\nAccounts are created automatically when you add parent information to student records. Parents receive an email with:\n- Their login credentials\n- A download link for the mobile app\n- A getting started guide\n\n## Key Parent Features\n- **Dashboard**: Overview of child's attendance, recent grades, upcoming events\n- **Attendance**: Real-time attendance status and history\n- **Grades**: Latest grades and report downloads\n- **Fees**: Current dues, payment history, online payment\n- **Messages**: Direct communication with teachers\n- **Notifications**: Configure what alerts they receive\n\n## Troubleshooting Parent Login Issues\nIf parents can't log in:\n1. Check their email for the welcome message (check spam)\n2. Use the **Forgot Password** link\n3. Contact your school admin to resend credentials`
  },
  "reset-password": {
    title: "How to Reset Your Password", category: "Account Setup", lastUpdated: "January 10, 2026",
    content: `# How to Reset Your Password\n\nFollow these steps to reset your KIDUART password.\n\n## Self-Service Password Reset\n1. Go to the KIDUART login page\n2. Click **Forgot Password**\n3. Enter your registered email address\n4. Check your email for a reset link (check spam folder too)\n5. Click the link and create a new password\n6. Password requirements: minimum 8 characters, at least one number\n\n## Admin-Initiated Password Reset\nAdministrators can reset passwords for staff or parents:\n1. Go to **HR > Staff** (for staff) or **Students > Parents** (for parents)\n2. Find the user account\n3. Click **Reset Password**\n4. The user will receive an email with reset instructions\n\n## Security Best Practices\n- Use a unique password not used on other sites\n- Enable two-factor authentication in **Settings > Security**\n- Log out when using shared computers`
  },
  "integration-setup": {
    title: "Setting Up Integrations", category: "Account Setup", lastUpdated: "February 28, 2026",
    content: `# Setting Up Integrations\n\nConnect KIDUART with your other school tools.\n\n## Available Integrations\nKIDUART integrates with:\n- Google Classroom\n- Microsoft Teams\n- Moodle\n- Canvas LMS\n- Zoom\n- Stripe (payments)\n- PayPal (payments)\n- Google Analytics\n\n## General Integration Steps\n1. Go to **Settings > Integrations**\n2. Find the integration you want to connect\n3. Click **Configure**\n4. Follow the platform-specific authorization steps\n5. Test the connection\n\n## API Integration\nFor custom integrations using the KIDUART API:\n- Documentation available at /integrations/api-docs\n- Generate your API key at **Settings > API > Generate Key**\n- Use the API with Bearer token authentication\n\n## Troubleshooting Integrations\nIf an integration stops working:\n1. Check if the authorization has expired (re-authorize)\n2. Verify the API keys are still valid\n3. Check the integration logs at **Settings > Integrations > Logs**\n4. Contact support if issues persist`
  }
};

export default function HelpArticle() {
  const { slug } = useParams();
  const article = slug ? helpArticlesData[slug] : null;
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null);

  if (!article) {
    return (
      <PageTransition className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-6">Article Not Found</h1>
        <p className="text-xl text-brand-navy/70 mb-8">The help article you are looking for doesn't exist.</p>
        <Link href="/help" className="px-8 py-4 rounded-full bg-brand-navy text-white font-bold inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Help Center
        </Link>
      </PageTransition>
    );
  }

  // Get 3 related articles from same category
  const relatedArticles = Object.entries(helpArticlesData)
    .filter(([key, data]) => key !== slug && data.category === article.category)
    .slice(0, 3);
    
  if (relatedArticles.length < 3) {
    const more = Object.entries(helpArticlesData)
      .filter(([key]) => key !== slug && !relatedArticles.find(([k]) => k === key))
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...more);
  }

  // Render markdown
  const renderContent = (text: string) => {
    return text.split('\\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return null; // Skip main title as it's handled in the header
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-brand-navy mt-10 mb-4">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-2 text-brand-navy/80 text-lg list-disc">{line.replace('- ', '').replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')}</li>;
      }
      if (/^\\d+\\.\\s/.test(line)) {
        return <li key={index} className="ml-6 mb-2 text-brand-navy/80 text-lg list-decimal">{line.replace(/^\\d+\\.\\s/, '').replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      const parts = line.split(/\\*\\*(.*?)\\*\\*/g);
      if (parts.length > 1) {
        return (
          <p key={index} className="text-lg text-brand-navy/80 mb-4">
            {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-brand-navy font-bold">{part}</strong> : part)}
          </p>
        );
      }
      
      return <p key={index} className="text-lg text-brand-navy/80 mb-4">{line}</p>;
    });
  };

  return (
    <PageTransition className="pt-20 pb-0 tooo">
      {/* Breadcrumb & Header */}
      <section className="bg-brand-navy py-16 text-white border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="flex items-center gap-2 text-sm text-white/60 mb-8 font-medium">
              <Link href="/help" className="hover:text-white transition-colors">Help Center</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="px-2 py-1 rounded bg-white/10 text-white">{article.category}</span>
              <ChevronRight className="w-4 h-4" />
              <span className="truncate">{article.title}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="w-4 h-4" />
              <span>Last updated: {article.lastUpdated}</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="prose prose-lg max-w-none prose-headings:text-brand-navy prose-p:text-brand-navy/80 prose-strong:text-brand-navy">
              {renderContent(article.content)}
            </div>
          </SectionReveal>

          {/* Feedback */}
          <SectionReveal delay={0.2} className="mt-16 pt-8 border-t border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <h3 className="text-lg font-bold text-brand-navy">Was this article helpful?</h3>
            <div className="flex gap-4">
              <button 
                onClick={() => setFeedback('yes')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all border-2 ${feedback === 'yes' ? 'bg-brand-teal text-white border-brand-teal' : 'bg-transparent text-brand-navy border-brand-navy/20 hover:border-brand-teal'}`}
              >
                <ThumbsUp className="w-4 h-4" /> Yes
              </button>
              <button 
                onClick={() => setFeedback('no')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all border-2 ${feedback === 'no' ? 'bg-red-500 text-white border-red-500' : 'bg-transparent text-brand-navy border-brand-navy/20 hover:border-red-500'}`}
              >
                <ThumbsDown className="w-4 h-4" /> No
              </button>
            </div>
            {feedback && <p className="text-brand-teal font-medium text-sm mt-2 sm:mt-0 w-full sm:w-auto text-center">Thanks for your feedback!</p>}
          </SectionReveal>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-brand-beige/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-10">
            <h2 className="text-2xl font-bold text-brand-navy">Related Articles</h2>
          </SectionReveal>
          
          <div className="space-y-4">
            {relatedArticles.map(([key, data], idx) => (
              <SectionReveal key={key} delay={idx * 0.1}>
                <Link href={`/help/${key}`} className="block bg-white p-6 rounded-2xl border border-brand-navy/5 shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all group flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors">{data.title}</h3>
                    <p className="text-sm text-brand-navy/50 mt-1">{data.category}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-brand-navy/30 group-hover:text-brand-teal" />
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-brand-navy text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <SectionReveal>
            <HelpCircle className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
            <p className="text-lg text-white/70 mb-8">Can't find the answer you're looking for? Our support team is here to help.</p>
            <a href="mailto:support@kiduart.com" className="px-8 py-4 rounded-full bg-brand-teal text-white font-bold text-lg hover:bg-white hover:text-brand-teal transition-all shadow-lg inline-flex items-center gap-2">
              <Mail className="w-5 h-5" /> Contact Support
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

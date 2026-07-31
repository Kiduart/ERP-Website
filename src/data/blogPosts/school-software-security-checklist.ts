import { AUTHOR_EDITORIAL, STYLE, post } from "./_helpers";

export default post("school-software-security-checklist", {
  title: "School Software Security Checklist: What Buyers Should Ask in 2026",
  author: AUTHOR_EDITORIAL,
  date: "February 26, 2026",
  category: "Education Technology",
  readTime: "17 min read",
  excerpt:
    "Student records, fee ledgers, and exam marks need more than a padlock icon on the website. Use this checklist to ask vendors about identity, roles, tenant isolation, sessions, and audit logs  without accepting fake certification claims.",
  ...STYLE.navy,
  content: `## Why school software security is different

A retail breach might leak order history. A school breach leaks minors' identities, guardian contacts, health notes, financial hardship signals, and academic performance  data families cannot rotate like a credit card. Regulators and boards ask harder questions every year; parents ask them too.

Most vendor security pages mix real controls with vague assurances. Buyers need a **checklist grounded in what the product actually implements**  not what marketing wishes were true in 2026.

This article is written in that spirit for schools evaluating any serious ERP, with examples from how KIDUART handles security today. We **do not** claim certifications we have not completed. Where a control is optional or on the roadmap, say so  and walk away from vendors that will not.

## 1. Identity and login

**Ask:** How are passwords stored? What second-factor options exist for staff? Can accounts lock after failed attempts?

**Why it matters:** Login is the widest door. Shared staffroom passwords and plain-text storage still appear in legacy systems.

**What good looks like:**

- Passwords hashed with **bcrypt**  no plain-text password stored or emailed
- **Authenticator-app MFA (TOTP)** with backup recovery codes for roles handling money or marks
- Account lockout after repeated failed login attempts
- Password reset via expiring links, not reusable tokens
- Google and Microsoft sign-in optional for schools already on those accounts

**Red flags:**

- Vendor cannot explain hashing algorithm
- "We encrypt passwords" without specifying one-way hashing
- MFA listed without clarifying SMS vs authenticator  SMS OTP for login may be roadmap, not live
- Shared admin credentials encouraged for integrations

**KIDUART today:** bcrypt hashing, TOTP MFA, lockout, Google/Microsoft sign-in where enabled. SMS-based second factor is **roadmap**  we say so plainly rather than listing it as available now.

## 2. Roles and permissions

**Ask:** Can a class teacher open the fee ledger? Can parents see other students? Who can grant permissions?

**Why it matters:** Curious browsing causes as many incidents as external hackers  often by staff whose job never required access.

**What good looks like:**

- Role-based permissions across modules  not one super-admin for everyone
- Delegation flows **downward**  organisation restricts what school admin may grant without letting them expand their own access
- Separate **role panels**  menus reflect real permissions; teachers do not navigate to finance screens they cannot open
- Staff can view their own assigned roles and permissions

**Red flags:**

- "Custom roles" that still share one database login
- Permission changes without logging
- Demo accounts with full access left active after pilot

**KIDUART today:** Ten role panels, explicit permissions, delegation from organisation to school, unified sidebars filtered by role.

## 3. Tenant isolation and multi-campus boundaries

**Ask:** If another school on your platform is compromised, can they query our students? How are trusts with multiple campuses separated?

**Why it matters:** Multi-tenant SaaS without structural isolation is a classic cross-school data leak waiting to happen.

**What good looks like:**

- **Tenant-per-school database separation**  not one shared table filtered by a school_id someone might forget
- Tenant resolved on **every request** before queries run
- Organisation rollups for groups without merging campus databases into one browsable pool
- Campus-wise reporting that aggregates summaries, not raw cross-campus student search for every user

**Red flags:**

- "Logical separation only" with no detail
- Organisation admin can open any campus record without scoped policy
- No clear answer on where backups are stored per tenant

**KIDUART today:** tenant-per-school separation, request-time tenant resolution, organisation grouping for multi-campus trusts.

## 4. Sessions and device control

**Ask:** If a teacher forgets to log out on a shared PC, what can we do? How many concurrent sessions are allowed?

**Why it matters:** Schools use shared computers, cyber cafés, and personal phones interchangeably.

**What good looks like:**

- Active session list with device and last-used detail
- Ability to revoke one session, other sessions, or all sessions
- Refresh token rotation with revocation on logout
- Concurrent session limits per role

**Red flags:**

- Logout only clears browser cookie while tokens remain valid indefinitely
- No admin-side session revocation for departed staff
- Unlimited sessions on privileged accounts

**KIDUART today:** session tracking, revocation, token invalidation on logout, concurrent limits per role.

## 5. Perimeter and abuse resistance

**Ask:** What stops credential stuffing on the login page? Can admin access be restricted to campus IP ranges?

**Why it matters:** Automated login attacks target education portals too  often at night when nobody watches.

**What good looks like:**

- API rate limiting with **stricter limits on authentication routes**
- Optional **IP allow lists and block lists** for schools that want tighter admin perimeter
- Optional **geo-restriction**  powerful but disruptive if misconfigured; should be enabled deliberately
- Standard HTTP hardening and input sanitisation

**Red flags:**

- No rate limiting described
- IP restriction marketed as on by default without warning about lockouts
- OTP templates unmanaged  authentication messages should be configurable in-product

**KIDUART today:** rate limiting, optional IP and geo controls enabled with school cooperation, OTP template management.

## 6. Audit trails and integration access

**Ask:** If a mark or fee entry changes, can we see who changed it? Do integrations use scoped API keys or shared staff passwords?

**Why it matters:** Disputes arrive months later  "my child was marked absent," "we paid on that date," "who exported the whole student list?"

**What good looks like:**

- Audit logging for authentication events, MFA changes, password resets, permission changes, sensitive financial and academic edits
- **Managed API keys** with scoped access instead of sharing staff credentials with vendors
- Payment gateway **webhooks verified** before processing  fake payment posts are a real attack vector
- Integration credentials encrypted at rest

**Red flags:**

- "We can check server logs if you ask"  no productised audit UI or export
- Integrations require principal's username and password
- No webhook signature verification for fee payments

**KIDUART today:** audit logging on sensitive actions, scoped API keys, verified payment webhooks, encrypted integration secrets.

## 7. Data handling honesty

**Ask:** Do you sell school data? Can we export everything if we leave? What do you use for AI training?

**Why it matters:** Student data monetisation should be an immediate disqualifier.

**What good looks like:**

- Clear statement: school data stays school's; no sale to advertisers or data brokers
- Export in standard formats on request and on contract termination
- AI features  if any  run on **your** school's data with staff-facing outputs, not opaque external profiling for resale
- Retention schedules: academic history kept because schools must; operational logs rotated

**Red flags:**

- Privacy policy buried and vague on subprocessors
- "Anonymised" sharing without defining anonymisation
- AI features that send identifiable student records to public LLM APIs without contract review

**KIDUART today:** no sale of student data; export on exit; KIDUORBIT analyses patterns inside the platform for authorised staff review  not sold to third-party marketers.

## 8. Certifications  ask for dates, not logos

**Ask:** Which audits have you **completed**? Can we read reports under NDA?

**Why it matters:** Logo walls imply ISO 27001, SOC 2, or PCI scope schools assume exists  often it does not yet.

**What good looks like:**

- Vendor lists completed certifications with dates and scope
- Honest statement of what is **in progress vs not started**
- Willingness to walk IT reviewers through controls on a call

**Red flags:**

- "We are ISO certified" without certificate scope covering the product you buy
- Implying FERPA or GDPR compliance by default without operational detail
- Refusing to discuss security unless you sign first

**KIDUART today:** we describe implemented controls and do **not** claim certifications we have not completed. When formal audits finish, we publish dates  not before.

## 9. Optional controls vs mandatory baseline

Some powerful features should stay **off until configured**:

- IP allow lists
- Geo-restriction

Misconfigured perimeter controls lock out legitimate users during fee week  worse than no IP filter. Good vendors enable and test with you.

Baseline should still include hashing, role permissions, tenant isolation, session revocation, rate limiting, and audit logs without extra fees marketed as "security packs."

## 10. Buyer workflow  use the checklist in order

1. Send this questionnaire before the demo  serious vendors answer plainly
2. During demo, log in as **teacher, parent, accountant**  confirm menus match claims
3. Ask for a staging pilot with real role accounts, not vendor-operated super-admin
4. Review privacy policy and subprocessors  payment gateway, SMS, email
5. Document exit export test  run once before full migration
6. Name internal owners for permission reviews each term

## Scenario-based questions that reveal truth

Replace generic "are you secure?" with scenarios:

- A parent reuses a leaked password  what stops account takeover?
- A teacher resigns Friday  how fast is access gone?
- Someone runs password guesses overnight  what throttles them?
- A vendor wants admin login for reporting  what do they get instead?
- Two schools on your platform  prove one cannot query the other's students

If answers are hand-wavy, keep looking.

## Closing: security as buying criterion, not brochure decoration

School software holds the most sensitive data many organisations will ever process. Security belongs in the first vendor conversation  equal to fee modules and parent app demos.

Use this checklist to demand specifics: **bcrypt, MFA, tenant isolation, audit logs, scoped API keys, honest certification status.** Accept plain language over glossy shields.

KIDUART publishes security posture aligned with implemented controls  including what is optional and what is still building. Schools deserve the same honesty from every vendor they consider in 2026.`,
  relatedSlugs: [
    "role-based-panels-school-erp",
    "student-data-management",
    "top-10-school-erp-india-2026",
  ],
});

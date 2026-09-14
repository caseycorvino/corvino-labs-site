/* The hero node-graph, lifted verbatim from the pre-Sept-8 site (commit 24edc22).
   Colored category clusters (Connections / Rules / Skills / Training) orbiting a
   HARNESS core, with parallax, cursor pull, and hover labels. Hero section only:
   every other surface gets the quiet gray net in site.js. */
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function tree() {
    return {
      id: 'core', label: 'HARNESS', sub: 'CLAUDE CODE · CODEX', tier: 0,
      children: [
        { id: 'connections', label: 'Connections', tier: 1, quadrant: 'tl', catColor: '#FF2E9E', children: [
          { id: 'sales', label: 'Sales', tier: 2, children: [
            { id: 'sfdc', label: 'Salesforce', tier: 3, children: [
              { id: 'sfdc-accounts', label: 'Accounts', tier: 4 },
              { id: 'sfdc-leads', label: 'Leads', tier: 4 },
              { id: 'sfdc-opps', label: 'Opportunities', tier: 4 },
              { id: 'sfdc-contacts', label: 'Contacts', tier: 4 },
              { id: 'sfdc-reports', label: 'Reports', tier: 4 },
              { id: 'sfdc-cases', label: 'Cases', tier: 4 }
            ]},
            { id: 'zoominfo', label: 'ZoomInfo', tier: 3, children: [
              { id: 'zi-leads', label: 'Leads', tier: 4 },
              { id: 'zi-contacts', label: 'Contacts', tier: 4 },
              { id: 'zi-intent', label: 'Intent data', tier: 4 }
            ]},
            { id: 'gong', label: 'Gong', tier: 3, children: [
              { id: 'gong-calls', label: 'Call recordings', tier: 4 },
              { id: 'gong-coaching', label: 'Coaching insights', tier: 4 },
              { id: 'gong-deals', label: 'Deal intelligence', tier: 4 }
            ]},
            { id: 'hubspot-sales', label: 'HubSpot', tier: 3, children: [
              { id: 'hubspot-deals', label: 'Deals', tier: 4 },
              { id: 'hubspot-contacts', label: 'Contacts', tier: 4 },
              { id: 'hubspot-pipeline', label: 'Pipeline', tier: 4 }
            ]},
            { id: 'outreach', label: 'Outreach', tier: 3, children: [
              { id: 'outreach-sequences', label: 'Sequences', tier: 4 },
              { id: 'outreach-templates', label: 'Templates', tier: 4 }
            ]},
            { id: 'salesloft', label: 'Salesloft', tier: 3, children: [
              { id: 'salesloft-cadences', label: 'Cadences', tier: 4 },
              { id: 'salesloft-analytics', label: 'Analytics', tier: 4 }
            ]},
            { id: 'apollo', label: 'Apollo', tier: 3, children: [
              { id: 'apollo-sequences', label: 'Sequences', tier: 4 },
              { id: 'apollo-data', label: 'Contact data', tier: 4 }
            ]},
            { id: 'chorus', label: 'Chorus', tier: 3, children: [
              { id: 'chorus-calls', label: 'Call library', tier: 4 },
              { id: 'chorus-trends', label: 'Trends', tier: 4 }
            ]}
          ]},
          { id: 'mktg', label: 'Marketing', tier: 2, children: [
            { id: 'meta-ads', label: 'Meta', tier: 3, children: [
              { id: 'meta-campaigns', label: 'Campaigns', tier: 4 },
              { id: 'meta-audiences', label: 'Audiences', tier: 4 }
            ]},
            { id: 'google-ads', label: 'Google Ads', tier: 3, children: [
              { id: 'google-search', label: 'Search', tier: 4 },
              { id: 'google-display', label: 'Display', tier: 4 }
            ]},
            { id: 'linkedin-ads', label: 'LinkedIn Ads', tier: 3, children: [
              { id: 'li-sponsored', label: 'Sponsored content', tier: 4 },
              { id: 'li-inmail', label: 'InMail', tier: 4 }
            ]},
            { id: 'mailchimp', label: 'Mailchimp', tier: 3, children: [
              { id: 'mailchimp-campaigns', label: 'Campaigns', tier: 4 },
              { id: 'mailchimp-automations', label: 'Automations', tier: 4 }
            ]},
            { id: 'webflow-cms', label: 'Webflow', tier: 3 },
            { id: 'hubspot-mktg', label: 'HubSpot Marketing', tier: 3, children: [
              { id: 'hubspot-forms', label: 'Forms', tier: 4 },
              { id: 'hubspot-lists', label: 'Lists', tier: 4 }
            ]},
            { id: 'segment', label: 'Segment', tier: 3, children: [
              { id: 'segment-events', label: 'Events', tier: 4 },
              { id: 'segment-audiences', label: 'Audiences', tier: 4 }
            ]}
          ]},
          { id: 'ops', label: 'Operations', tier: 2, children: [
            { id: 'slack', label: 'Slack', tier: 3, children: [
              { id: 'slack-channels', label: 'Channels', tier: 4 },
              { id: 'slack-dms', label: 'DMs', tier: 4 },
              { id: 'slack-workflows', label: 'Workflows', tier: 4 }
            ]},
            { id: 'onedrive', label: 'OneDrive', tier: 3, children: [
              { id: 'onedrive-files', label: 'Files', tier: 4 },
              { id: 'onedrive-shares', label: 'Shares', tier: 4 }
            ]},
            { id: 'outlook-c', label: 'Outlook', tier: 3 },
            { id: 'asana', label: 'Asana', tier: 3, children: [
              { id: 'asana-projects', label: 'Projects', tier: 4 },
              { id: 'asana-tasks', label: 'Tasks', tier: 4 },
              { id: 'asana-timelines', label: 'Timelines', tier: 4 }
            ]},
            { id: 'notion', label: 'Notion', tier: 3, children: [
              { id: 'notion-docs', label: 'Docs', tier: 4 },
              { id: 'notion-wikis', label: 'Wikis', tier: 4 }
            ]},
            { id: 'jira', label: 'Jira', tier: 3, children: [
              { id: 'jira-tickets', label: 'Tickets', tier: 4 },
              { id: 'jira-sprints', label: 'Sprints', tier: 4 }
            ]},
            { id: 'rippling', label: 'Rippling', tier: 3, children: [
              { id: 'rippling-payroll', label: 'Payroll', tier: 4 },
              { id: 'rippling-benefits', label: 'Benefits', tier: 4 }
            ]},
            { id: 'gusto', label: 'Gusto', tier: 3, children: [
              { id: 'gusto-payroll', label: 'Payroll', tier: 4 },
              { id: 'gusto-onboarding', label: 'Onboarding', tier: 4 }
            ]},
            { id: 'greenhouse', label: 'Greenhouse', tier: 3, children: [
              { id: 'greenhouse-pipelines', label: 'Pipelines', tier: 4 },
              { id: 'greenhouse-scorecards', label: 'Scorecards', tier: 4 }
            ]},
            { id: 'linkedin-recruiter', label: 'LinkedIn Recruiter', tier: 3, children: [
              { id: 'li-recruiter-search', label: 'Talent search', tier: 4 },
              { id: 'li-recruiter-inmail', label: 'InMail', tier: 4 }
            ]},
            { id: 'docusign', label: 'DocuSign', tier: 3, children: [
              { id: 'docusign-envelopes', label: 'Envelopes', tier: 4 },
              { id: 'docusign-templates', label: 'Templates', tier: 4 }
            ]},
            { id: 'ironclad', label: 'Ironclad', tier: 3, children: [
              { id: 'ironclad-workflows', label: 'Workflows', tier: 4 },
              { id: 'ironclad-repository', label: 'Repository', tier: 4 }
            ]},
            { id: 'snowflake', label: 'Snowflake', tier: 3, children: [
              { id: 'snowflake-warehouses', label: 'Warehouses', tier: 4 },
              { id: 'snowflake-schemas', label: 'Schemas', tier: 4 }
            ]},
            { id: 'looker', label: 'Looker', tier: 3, children: [
              { id: 'looker-dashboards', label: 'Dashboards', tier: 4 },
              { id: 'looker-explores', label: 'Explores', tier: 4 }
            ]},
            { id: 'zoom', label: 'Zoom', tier: 3, children: [
              { id: 'zoom-meetings', label: 'Meetings', tier: 4 },
              { id: 'zoom-webinars', label: 'Webinars', tier: 4 }
            ]},
            { id: 'calendly', label: 'Calendly', tier: 3 },
            { id: 'loom', label: 'Loom', tier: 3 },
            { id: 'mixpanel', label: 'Mixpanel', tier: 3 },
            { id: 'amplitude', label: 'Amplitude', tier: 3 }
          ]},
          { id: 'finance-c', label: 'Finance', tier: 2, children: [
            { id: 'stripe', label: 'Stripe', tier: 3, children: [
              { id: 'stripe-invoices', label: 'Invoices', tier: 4 },
              { id: 'stripe-subscriptions', label: 'Subscriptions', tier: 4 },
              { id: 'stripe-payouts', label: 'Payouts', tier: 4 }
            ]},
            { id: 'chartmogul', label: 'ChartMogul', tier: 3, children: [
              { id: 'chartmogul-mrr', label: 'MRR', tier: 4 },
              { id: 'chartmogul-churn', label: 'Churn', tier: 4 }
            ]},
            { id: 'quickbooks', label: 'QuickBooks', tier: 3, children: [
              { id: 'qb-ledger', label: 'Ledger', tier: 4 },
              { id: 'qb-reconciliation', label: 'Reconciliation', tier: 4 }
            ]},
            { id: 'brex', label: 'Brex', tier: 3 },
            { id: 'ramp', label: 'Ramp', tier: 3, children: [
              { id: 'ramp-cards', label: 'Cards', tier: 4 },
              { id: 'ramp-approvals', label: 'Approvals', tier: 4 }
            ]},
            { id: 'bill-com', label: 'Bill.com', tier: 3, children: [
              { id: 'billcom-ap', label: 'Accounts payable', tier: 4 },
              { id: 'billcom-ar', label: 'Accounts receivable', tier: 4 }
            ]}
          ]},
          { id: 'support', label: 'Support', tier: 2, children: [
            { id: 'zendesk', label: 'Zendesk', tier: 3, children: [
              { id: 'zendesk-tickets', label: 'Tickets', tier: 4 },
              { id: 'zendesk-macros', label: 'Macros', tier: 4 }
            ]},
            { id: 'intercom', label: 'Intercom', tier: 3, children: [
              { id: 'intercom-chats', label: 'Chats', tier: 4 },
              { id: 'intercom-articles', label: 'Help articles', tier: 4 }
            ]},
            { id: 'freshdesk', label: 'Freshdesk', tier: 3, children: [
              { id: 'freshdesk-tickets', label: 'Tickets', tier: 4 },
              { id: 'freshdesk-sla', label: 'SLA policies', tier: 4 }
            ]}
          ]},
        ]},
        { id: 'rules', label: 'Rules', tier: 1, quadrant: 'tr', catColor: '#FF4D3D', children: [
          { id: 'brand', label: 'Brand Guidelines', tier: 2, children: [
            { id: 'copy', label: 'Copy', tier: 3, children: [
              { id: 'copy-tone', label: 'Tone', tier: 4 },
              { id: 'copy-banned-words', label: 'Banned words', tier: 4 }
            ]},
            { id: 'colors', label: 'Colors', tier: 3, children: [
              { id: 'colors-primary', label: 'Primary palette', tier: 4 },
              { id: 'colors-secondary', label: 'Secondary palette', tier: 4 }
            ]},
            { id: 'assets', label: 'Assets', tier: 3, children: [
              { id: 'assets-logo', label: 'Logo usage', tier: 4 },
              { id: 'assets-icons', label: 'Icon set', tier: 4 }
            ]},
            { id: 'fonts', label: 'Fonts', tier: 3, children: [
              { id: 'fonts-heading', label: 'Heading face', tier: 4 },
              { id: 'fonts-body', label: 'Body face', tier: 4 }
            ]},
            { id: 'imagery', label: 'Imagery', tier: 3, children: [
              { id: 'imagery-style', label: 'Style', tier: 4 },
              { id: 'imagery-usage', label: 'Usage rights', tier: 4 }
            ]},
            { id: 'voice-guidelines', label: 'Voice Guidelines', tier: 3, children: [
              { id: 'voice-dos', label: "Do's", tier: 4 },
              { id: 'voice-donts', label: "Don'ts", tier: 4 }
            ]}
          ]},
          { id: 'connrules', label: 'Connection Rules', tier: 2, children: [
            { id: 'outlook-r', label: 'Outlook', tier: 3, children: [
              { id: 'outlook-sig', label: 'Signature', tier: 4 },
              { id: 'outlook-draft', label: 'Draft only', tier: 4 },
              { id: 'outlook-noauto', label: 'No auto-send', tier: 4 }
            ]},
            { id: 'contracts', label: 'Contracts', tier: 3, children: [
              { id: 'contracts-approval', label: 'Approval required', tier: 4 },
              { id: 'contracts-redline', label: 'Redline flagging', tier: 4 }
            ]},
            { id: 'slack-rules', label: 'Slack', tier: 3, children: [
              { id: 'slack-no-dm-execs', label: 'No DMs to execs', tier: 4 },
              { id: 'slack-retention', label: 'Retention', tier: 4 }
            ]},
            { id: 'crm-rules', label: 'CRM', tier: 3, children: [
              { id: 'crm-no-overwrite', label: 'No field overwrites', tier: 4 },
              { id: 'crm-audit-required', label: 'Audit required', tier: 4 }
            ]},
            { id: 'calendar-rules', label: 'Calendar', tier: 3, children: [
              { id: 'calendar-no-double-book', label: 'No double-booking', tier: 4 },
              { id: 'calendar-buffer', label: 'Buffer time', tier: 4 }
            ]},
            { id: 'expense-rules', label: 'Expense', tier: 3, children: [
              { id: 'expense-receipt-required', label: 'Receipt required', tier: 4 },
              { id: 'expense-category-lock', label: 'Category lock', tier: 4 }
            ]}
          ]},
          { id: 'hallucination', label: 'Hallucination Rules', tier: 2, children: [
            { id: 'cite', label: 'Cite sources', tier: 3, children: [
              { id: 'cite-primary-source', label: 'Primary source', tier: 4 },
              { id: 'cite-date-check', label: 'Date check', tier: 4 }
            ]},
            { id: 'flag-conf', label: 'Flag low confidence', tier: 3, children: [
              { id: 'flag-below-70', label: 'Below 70%', tier: 4 },
              { id: 'flag-conflicting', label: 'Conflicting sources', tier: 4 }
            ]},
            { id: 'verify-numbers', label: 'Verify numbers', tier: 3, children: [
              { id: 'verify-cross-source', label: 'Cross-source', tier: 4 },
              { id: 'verify-recompute', label: 'Recompute', tier: 4 }
            ]},
            { id: 'no-fabricate-quotes', label: 'No fabricated quotes', tier: 3, children: [
              { id: 'no-fab-verbatim', label: 'Verbatim only', tier: 4 },
              { id: 'no-fab-attribution', label: 'Attribution required', tier: 4 }
            ]}
          ]},
          { id: 'payment', label: 'Payment Rules', tier: 2, children: [
            { id: 'limits', label: 'Spend limits', tier: 3, children: [
              { id: 'limits-daily', label: 'Daily cap', tier: 4 },
              { id: 'limits-per-vendor', label: 'Per vendor', tier: 4 }
            ]},
            { id: 'dual-approval', label: 'Dual approval', tier: 3, children: [
              { id: 'dual-over-1k', label: 'Over $1k', tier: 4 },
              { id: 'dual-new-vendor', label: 'New vendor', tier: 4 }
            ]},
            { id: 'vendor-verification', label: 'Vendor verification', tier: 3, children: [
              { id: 'vendor-verify-w9', label: 'W-9 on file', tier: 4 },
              { id: 'vendor-verify-bank', label: 'Bank match', tier: 4 }
            ]},
            { id: 'currency-rules', label: 'Currency rules', tier: 3, children: [
              { id: 'currency-fx-lock', label: 'FX rate lock', tier: 4 },
              { id: 'currency-reporting', label: 'Reporting currency', tier: 4 }
            ]}
          ]},
          { id: 'settings', label: 'Settings & Permissions', tier: 2, children: [
            { id: 'access', label: 'Access levels', tier: 3, children: [
              { id: 'access-admin', label: 'Admin', tier: 4 },
              { id: 'access-viewer', label: 'Viewer', tier: 4 }
            ]},
            { id: 'audit', label: 'Audit log', tier: 3, children: [
              { id: 'audit-retention', label: 'Retention', tier: 4 },
              { id: 'audit-export', label: 'Export', tier: 4 }
            ]},
            { id: 'role-based-access', label: 'Role-based access', tier: 3, children: [
              { id: 'rbac-roles', label: 'Roles', tier: 4 },
              { id: 'rbac-scopes', label: 'Scopes', tier: 4 }
            ]},
            { id: 'session-timeout', label: 'Session timeout', tier: 3 }
          ]},
          { id: 'compliance', label: 'Compliance', tier: 2, children: [
            { id: 'soc2', label: 'SOC 2', tier: 3, children: [
              { id: 'soc2-controls', label: 'Controls', tier: 4 },
              { id: 'soc2-audit-cycle', label: 'Audit cycle', tier: 4 }
            ]},
            { id: 'gdpr', label: 'GDPR', tier: 3, children: [
              { id: 'gdpr-dsar', label: 'DSAR handling', tier: 4 },
              { id: 'gdpr-consent', label: 'Consent tracking', tier: 4 }
            ]},
            { id: 'ccpa', label: 'CCPA', tier: 3, children: [
              { id: 'ccpa-optout', label: 'Opt-out handling', tier: 4 },
              { id: 'ccpa-disclosure', label: 'Disclosure', tier: 4 }
            ]},
            { id: 'hipaa', label: 'HIPAA', tier: 3, children: [
              { id: 'hipaa-baa', label: 'BAA tracking', tier: 4 },
              { id: 'hipaa-training', label: 'Training records', tier: 4 }
            ]}
          ]}
        ]},
        { id: 'skills', label: 'Skills', tier: 1, quadrant: 'bl', catColor: '#33FF88', children: [
          { id: 'billing', label: 'Billing', tier: 2, children: [
            { id: 'invoice', label: 'Create invoice', tier: 3, children: [
              { id: 'invoice-validate-po', label: 'Validate PO', tier: 4 },
              { id: 'invoice-apply-tax', label: 'Apply tax', tier: 4 }
            ]},
            { id: 'expense', label: 'Mark expense', tier: 3, children: [
              { id: 'expense-categorize', label: 'Categorize', tier: 4 },
              { id: 'expense-flag-outlier', label: 'Flag outlier', tier: 4 }
            ]},
            { id: 'paybill', label: 'Pay bill', tier: 3, children: [
              { id: 'paybill-schedule', label: 'Schedule', tier: 4 },
              { id: 'paybill-verify-vendor', label: 'Verify vendor', tier: 4 }
            ]},
            { id: 'reconcile', label: 'Reconcile', tier: 3, children: [
              { id: 'reconcile-bank', label: 'Bank match', tier: 4 },
              { id: 'reconcile-ledger', label: 'Ledger tie-out', tier: 4 }
            ]},
            { id: 'refund', label: 'Process refund', tier: 3, children: [
              { id: 'refund-process', label: 'Process', tier: 4 },
              { id: 'refund-approve', label: 'Approve', tier: 4 }
            ]}
          ]},
          { id: 'reporting', label: 'Reporting', tier: 2, children: [
            { id: 'weekly', label: 'Weekly summary', tier: 3, children: [
              { id: 'weekly-metrics', label: 'Metrics', tier: 4 },
              { id: 'weekly-narrative', label: 'Narrative', tier: 4 }
            ]},
            { id: 'boarddeck', label: 'Board deck', tier: 3, children: [
              { id: 'boarddeck-slides', label: 'Slides', tier: 4 },
              { id: 'boarddeck-appendix', label: 'Appendix', tier: 4 }
            ]},
            { id: 'qbr', label: 'QBR', tier: 3, children: [
              { id: 'qbr-metrics', label: 'Metrics', tier: 4 },
              { id: 'qbr-narrative', label: 'Narrative', tier: 4 }
            ]},
            { id: 'dashboard-refresh', label: 'Dashboard refresh', tier: 3, children: [
              { id: 'dashboard-cadence', label: 'Cadence', tier: 4 },
              { id: 'dashboard-alerts', label: 'Alerts', tier: 4 }
            ]}
          ]},
          { id: 'searching', label: 'Searching', tier: 2, children: [
            { id: 'prioritize', label: 'Prioritize sources', tier: 3, children: [
              { id: 'prioritize-recency', label: 'Recency', tier: 4 },
              { id: 'prioritize-authority', label: 'Authority', tier: 4 }
            ]},
            { id: 'crosscheck', label: 'Cross-check facts', tier: 3, children: [
              { id: 'crosscheck-dedup', label: 'De-dupe', tier: 4 },
              { id: 'crosscheck-conflict', label: 'Conflict flag', tier: 4 }
            ]},
            { id: 'citation-formatting', label: 'Citation formatting', tier: 3, children: [
              { id: 'citation-apa', label: 'APA style', tier: 4 },
              { id: 'citation-mla', label: 'MLA style', tier: 4 }
            ]},
            { id: 'source-caching', label: 'Source caching', tier: 3, children: [
              { id: 'cache-ttl', label: 'TTL', tier: 4 },
              { id: 'cache-invalidate', label: 'Invalidation', tier: 4 }
            ]}
          ]},
          { id: 'scheduling', label: 'Scheduling', tier: 2, children: [
            { id: 'bookmeetings', label: 'Book meetings', tier: 3, children: [
              { id: 'bookmeetings-availability', label: 'Availability check', tier: 4 },
              { id: 'bookmeetings-timezone', label: 'Timezone handling', tier: 4 }
            ]},
            { id: 'coordinate', label: 'Coordinate calendars', tier: 3, children: [
              { id: 'coordinate-conflicts', label: 'Conflict resolution', tier: 4 },
              { id: 'coordinate-reminders', label: 'Reminders', tier: 4 }
            ]},
            { id: 'reschedule', label: 'Reschedule', tier: 3, children: [
              { id: 'reschedule-notify', label: 'Notify attendees', tier: 4 },
              { id: 'reschedule-conflict-check', label: 'Conflict check', tier: 4 }
            ]},
            { id: 'find-time', label: 'Find a time', tier: 3, children: [
              { id: 'findtime-poll', label: 'Poll', tier: 4 },
              { id: 'findtime-suggest', label: 'Suggest slots', tier: 4 }
            ]}
          ]},
          { id: 'drafting', label: 'Drafting', tier: 2, children: [
            { id: 'draft-emails', label: 'Emails', tier: 3, children: [
              { id: 'draft-cold', label: 'Cold outreach', tier: 4 },
              { id: 'draft-followup', label: 'Follow-up', tier: 4 }
            ]},
            { id: 'proposals', label: 'Proposals', tier: 3, children: [
              { id: 'proposals-pricing', label: 'Pricing', tier: 4 },
              { id: 'proposals-scope', label: 'Scope', tier: 4 }
            ]},
            { id: 'slide-decks', label: 'Slide decks', tier: 3, children: [
              { id: 'slidedeck-template', label: 'Template', tier: 4 },
              { id: 'slidedeck-brand-check', label: 'Brand check', tier: 4 }
            ]},
            { id: 'one-pagers', label: 'One-pagers', tier: 3, children: [
              { id: 'onepager-template', label: 'Template', tier: 4 },
              { id: 'onepager-stats', label: 'Stats block', tier: 4 }
            ]}
          ]},
          { id: 'escalating', label: 'Escalating', tier: 2, children: [
            { id: 'flag-human', label: 'Flag to human', tier: 3, children: [
              { id: 'flag-urgent', label: 'Urgent', tier: 4 },
              { id: 'flag-lowconf', label: 'Low confidence', tier: 4 }
            ]},
            { id: 'route-owner', label: 'Route by owner', tier: 3, children: [
              { id: 'route-by-territory', label: 'By territory', tier: 4 },
              { id: 'route-by-load', label: 'By workload', tier: 4 }
            ]},
            { id: 'snooze', label: 'Snooze', tier: 3, children: [
              { id: 'snooze-duration', label: 'Duration', tier: 4 },
              { id: 'snooze-reminder', label: 'Reminder', tier: 4 }
            ]},
            { id: 'auto-close', label: 'Auto-close', tier: 3, children: [
              { id: 'autoclose-inactive', label: 'Inactive threads', tier: 4 },
              { id: 'autoclose-resolved', label: 'Resolved threads', tier: 4 }
            ]}
          ]},
          { id: 'summarizing', label: 'Summarizing', tier: 2, children: [
            { id: 'call-notes', label: 'Call notes', tier: 3, children: [
              { id: 'call-notes-actionitems', label: 'Action items', tier: 4 },
              { id: 'call-notes-sentiment', label: 'Sentiment', tier: 4 }
            ]},
            { id: 'thread-digest', label: 'Thread digests', tier: 3, children: [
              { id: 'thread-digest-daily', label: 'Daily', tier: 4 },
              { id: 'thread-digest-weekly', label: 'Weekly', tier: 4 }
            ]},
            { id: 'meeting-recap', label: 'Meeting recap', tier: 3, children: [
              { id: 'recap-attendees', label: 'Attendees', tier: 4 },
              { id: 'recap-nextsteps', label: 'Next steps', tier: 4 }
            ]},
            { id: 'doc-tldr', label: 'Doc TL;DR', tier: 3, children: [
              { id: 'tldr-length', label: 'Target length', tier: 4 },
              { id: 'tldr-keypoints', label: 'Key points', tier: 4 }
            ]}
          ]},
          { id: 'negotiating', label: 'Negotiating', tier: 2, children: [
            { id: 'redlines', label: 'Contract redlines', tier: 3, children: [
              { id: 'redlines-track-changes', label: 'Track changes', tier: 4 },
              { id: 'redlines-clause-lib', label: 'Clause library', tier: 4 }
            ]},
            { id: 'pricing-approval', label: 'Pricing approval', tier: 3, children: [
              { id: 'pricing-discount-cap', label: 'Discount cap', tier: 4 },
              { id: 'pricing-escalation', label: 'Escalation path', tier: 4 }
            ]},
            { id: 'counter-offer', label: 'Counter-offer', tier: 3, children: [
              { id: 'counter-terms', label: 'Terms', tier: 4 },
              { id: 'counter-timeline', label: 'Timeline', tier: 4 }
            ]},
            { id: 'terms-comparison', label: 'Terms comparison', tier: 3, children: [
              { id: 'terms-redline', label: 'Redline diff', tier: 4 },
              { id: 'terms-benchmark', label: 'Benchmark', tier: 4 }
            ]}
          ]}
        ]},
        { id: 'training', label: 'Training', tier: 1, quadrant: 'br', catColor: '#B84DFF', children: [
          { id: 'salesmethod', label: 'Sales Methodology', tier: 2, children: [
            { id: 'calls', label: 'Calls', tier: 3, children: [
              { id: 'calls-discovery', label: 'Discovery', tier: 4 },
              { id: 'calls-demo', label: 'Demo', tier: 4 }
            ]},
            { id: 'emails-t', label: 'Emails', tier: 3, children: [
              { id: 'emails-sequence', label: 'Sequence', tier: 4 },
              { id: 'emails-cadence', label: 'Cadence', tier: 4 }
            ]},
            { id: 'flow', label: 'High-level flow', tier: 3, children: [
              { id: 'flow-stages', label: 'Stages', tier: 4 },
              { id: 'flow-handoffs', label: 'Handoffs', tier: 4 }
            ]},
            { id: 'strategy', label: 'High-level strategy', tier: 3, children: [
              { id: 'strategy-icp', label: 'ICP', tier: 4 },
              { id: 'strategy-verticals', label: 'Verticals', tier: 4 }
            ]},
            { id: 'objection-handling', label: 'Objection handling', tier: 3, children: [
              { id: 'objection-price', label: 'Price objections', tier: 4 },
              { id: 'objection-competitor', label: 'Competitor objections', tier: 4 }
            ]},
            { id: 'pricing-playbook', label: 'Pricing playbook', tier: 3, children: [
              { id: 'pricing-discount-guardrails', label: 'Discount guardrails', tier: 4 },
              { id: 'pricing-bundles', label: 'Bundles', tier: 4 }
            ]}
          ]},
          { id: 'culture', label: 'Company Culture', tier: 2, children: [
            { id: 'values', label: 'Values', tier: 3, children: [
              { id: 'values-integrity', label: 'Integrity', tier: 4 },
              { id: 'values-speed', label: 'Speed', tier: 4 }
            ]},
            { id: 'rituals', label: 'Rituals', tier: 3, children: [
              { id: 'rituals-standup', label: 'Standups', tier: 4 },
              { id: 'rituals-allhands', label: 'All-hands', tier: 4 }
            ]},
            { id: 'communication-norms', label: 'Communication norms', tier: 3, children: [
              { id: 'comms-async', label: 'Async-first', tier: 4 },
              { id: 'comms-response-time', label: 'Response time', tier: 4 }
            ]},
            { id: 'diversity', label: 'Diversity & Inclusion', tier: 3, children: [
              { id: 'diversity-hiring', label: 'Hiring', tier: 4 },
              { id: 'diversity-erg', label: 'ERGs', tier: 4 }
            ]}
          ]},
          { id: 'mission', label: 'Company Mission', tier: 2, children: [
            { id: 'northstar', label: 'North star', tier: 3, children: [
              { id: 'northstar-metric', label: 'Metric', tier: 4 },
              { id: 'northstar-review-cadence', label: 'Review cadence', tier: 4 }
            ]},
            { id: 'principles', label: 'Principles', tier: 3, children: [
              { id: 'principles-list', label: 'List', tier: 4 },
              { id: 'principles-examples', label: 'Examples', tier: 4 }
            ]},
            { id: 'vision-statement', label: 'Vision statement', tier: 3, children: [
              { id: 'vision-3yr', label: '3-year vision', tier: 4 },
              { id: 'vision-10yr', label: '10-year vision', tier: 4 }
            ]}
          ]},
          { id: 'orgchart', label: 'Org Chart', tier: 2, children: [
            { id: 'leadership', label: 'Leadership', tier: 3, children: [
              { id: 'leadership-ceo', label: 'CEO', tier: 4 },
              { id: 'leadership-cto', label: 'CTO', tier: 4 }
            ]},
            { id: 'reporting-lines', label: 'Reporting lines', tier: 3, children: [
              { id: 'reporting-direct', label: 'Direct reports', tier: 4 },
              { id: 'reporting-dotted', label: 'Dotted-line', tier: 4 }
            ]},
            { id: 'departments', label: 'Departments', tier: 3, children: [
              { id: 'departments-eng', label: 'Engineering', tier: 4 },
              { id: 'departments-gtm', label: 'Go-to-market', tier: 4 }
            ]}
          ]},
          { id: 'history', label: 'Company History', tier: 2, children: [
            { id: 'founding', label: 'Founding story', tier: 3, children: [
              { id: 'founding-year', label: 'Founding year', tier: 4 },
              { id: 'founding-story-detail', label: 'Origin story', tier: 4 }
            ]},
            { id: 'milestones', label: 'Key milestones', tier: 3, children: [
              { id: 'milestones-funding', label: 'Funding rounds', tier: 4 },
              { id: 'milestones-product-launches', label: 'Product launches', tier: 4 }
            ]},
            { id: 'pivots', label: 'Pivots', tier: 3, children: [
              { id: 'pivots-reason', label: 'Reason', tier: 4 },
              { id: 'pivots-outcome', label: 'Outcome', tier: 4 }
            ]}
          ]},
          { id: 'casestudies', label: 'Case Studies', tier: 2, children: [
            { id: 'case-outdoor', label: 'Outdoor advertising', tier: 3, children: [
              { id: 'case-outdoor-results', label: 'Results', tier: 4 },
              { id: 'case-outdoor-approach', label: 'Approach', tier: 4 }
            ]},
            { id: 'case-healthtech', label: 'Health-tech agency', tier: 3, children: [
              { id: 'case-healthtech-results', label: 'Results', tier: 4 },
              { id: 'case-healthtech-approach', label: 'Approach', tier: 4 }
            ]},
            { id: 'case-template', label: 'Case template', tier: 3, children: [
              { id: 'case-template-structure', label: 'Structure', tier: 4 },
              { id: 'case-template-metrics', label: 'Metrics block', tier: 4 }
            ]}
          ]},
          { id: 'market', label: 'Market & Competitors', tier: 2, children: [
            { id: 'competitor-tracking', label: 'Competitor tracking', tier: 3, children: [
              { id: 'competitor-a', label: 'Competitor A', tier: 4 },
              { id: 'competitor-b', label: 'Competitor B', tier: 4 }
            ]},
            { id: 'positioning', label: 'Positioning', tier: 3, children: [
              { id: 'positioning-statement', label: 'Statement', tier: 4 },
              { id: 'positioning-differentiators', label: 'Differentiators', tier: 4 }
            ]},
            { id: 'market-trends', label: 'Market trends', tier: 3, children: [
              { id: 'trends-ai-adoption', label: 'AI adoption', tier: 4 },
              { id: 'trends-buyer-behavior', label: 'Buyer behavior', tier: 4 }
            ]}
          ]},
          { id: 'customers', label: 'Key Customers & Partners', tier: 2, children: [
            { id: 'logowall', label: 'Logo wall', tier: 3, children: [
              { id: 'logowall-tier1', label: 'Tier 1 logos', tier: 4 },
              { id: 'logowall-tier2', label: 'Tier 2 logos', tier: 4 }
            ]},
            { id: 'champions', label: 'Champion contacts', tier: 3, children: [
              { id: 'champions-outreach', label: 'Outreach cadence', tier: 4 },
              { id: 'champions-referrals', label: 'Referrals', tier: 4 }
            ]},
            { id: 'renewal-signals', label: 'Renewal signals', tier: 3, children: [
              { id: 'renewal-usage', label: 'Usage trend', tier: 4 },
              { id: 'renewal-nps', label: 'NPS', tier: 4 }
            ]}
          ]}
        ]}
      ]
    };
  }

  var CROSS_LINKS = [
    ['invoice', 'stripe'], ['paybill', 'stripe'], ['expense', 'chartmogul'],
    ['bookmeetings', 'outlook-c'], ['coordinate', 'outlook-c'], ['draft-emails', 'outlook-c'],
    ['call-notes', 'gong'], ['thread-digest', 'slack'],
    ['prioritize', 'zoominfo'], ['prioritize', 'sfdc'], ['crosscheck', 'zoominfo'],
    ['weekly', 'sfdc-reports'], ['boarddeck', 'chartmogul'],
    ['flag-human', 'slack'], ['route-owner', 'sfdc'],
    ['invoice', 'limits'], ['paybill', 'dual-approval'],
    ['draft-emails', 'copy'], ['draft-emails', 'outlook-sig'],
    ['proposals', 'copy'], ['proposals', 'contracts-approval'],
    ['prioritize', 'cite'], ['crosscheck', 'flag-conf'],
    ['redlines', 'contracts-redline'], ['pricing-approval', 'dual-approval'],
    ['flag-human', 'access'], ['route-owner', 'access'],
    ['call-notes', 'calls'], ['draft-emails', 'emails-t'],
    ['prioritize', 'market'], ['weekly', 'strategy'], ['redlines', 'strategy'],
    ['payment', 'stripe'], ['settings', 'sfdc'], ['settings', 'slack'],
    ['gdpr', 'sfdc-contacts'], ['gdpr', 'zi-contacts'], ['soc2', 'onedrive'],
    ['brand', 'meta-ads'], ['brand', 'google-ads'],
    ['brand', 'values'], ['hallucination', 'market'], ['compliance', 'leadership'],
    ['sfdc', 'salesmethod'], ['gong', 'calls'], ['case-outdoor', 'sfdc'], ['case-healthtech', 'sfdc'],

    ['invoice-validate-po', 'sfdc-opps'], ['expense-categorize', 'qb-ledger'], ['paybill-schedule', 'stripe-payouts'],
    ['weekly-metrics', 'sfdc-reports'], ['boarddeck-slides', 'chartmogul-mrr'],
    ['prioritize-authority', 'zi-intent'], ['crosscheck-dedup', 'sfdc-contacts'],
    ['bookmeetings-availability', 'calendly'], ['coordinate-conflicts', 'zoom-meetings'],
    ['draft-cold', 'outreach-sequences'], ['draft-followup', 'salesloft-cadences'],
    ['proposals-pricing', 'docusign-templates'], ['proposals-scope', 'ironclad-repository'],
    ['flag-urgent', 'slack-workflows'], ['route-by-territory', 'sfdc-accounts'],
    ['call-notes-actionitems', 'asana-tasks'], ['thread-digest-daily', 'notion-docs'],
    ['redlines-track-changes', 'docusign-envelopes'], ['pricing-discount-cap', 'contracts-approval'],
    ['weekly', 'sfdc-opps'], ['qbr', 'chartmogul-mrr'],
    ['dashboard-refresh', 'jira-tickets'], ['dashboard-refresh', 'snowflake-schemas'],
    ['crosscheck', 'hubspot-sales'], ['prioritize', 'li-recruiter-search'], ['prioritize', 'looker-dashboards'],
    ['boarddeck', 'notion-docs'], ['proposals', 'zoom-meetings'],
    ['prioritize', 'greenhouse-scorecards'], ['crosscheck', 'sfdc-accounts'],
    ['dashboard-refresh', 'ironclad-workflows'], ['terms-comparison', 'docusign-templates'],
    ['proposals', 'loom'], ['reconcile', 'rippling-benefits'],
    ['weekly', 'looker-explores'], ['weekly-metrics', 'mixpanel'],
    ['boarddeck-slides', 'amplitude'], ['crosscheck-dedup', 'snowflake-schemas'],
    ['qbr-metrics', 'chartmogul-mrr'], ['dashboard-alerts', 'jira-tickets'],
    ['refund-process', 'stripe-payouts'], ['invoice-apply-tax', 'ramp-cards'],
    ['citation-apa', 'zoominfo'], ['source-caching', 'snowflake-warehouses'],
    ['findtime-suggest', 'zoom-meetings'], ['slidedeck-brand-check', 'notion-docs'],
    ['counter-terms', 'ironclad-repository'], ['snooze-reminder', 'slack-workflows'],
    ['autoclose-resolved', 'zendesk-tickets'], ['recap-nextsteps', 'asana-tasks'],
    ['tldr-keypoints', 'notion-wikis'],

    ['invoice-apply-tax', 'currency-rules'], ['expense-flag-outlier', 'audit-retention'], ['paybill-verify-vendor', 'vendor-verification'],
    ['reconcile-bank', 'soc2-controls'],
    ['weekly-narrative', 'copy-tone'], ['boarddeck-appendix', 'audit'],
    ['prioritize-recency', 'cite-date-check'], ['crosscheck-conflict', 'flag-conflicting'],
    ['citation-formatting', 'cite-primary-source'],
    ['draft-cold', 'copy-tone'], ['draft-followup', 'copy-banned-words'], ['proposals-scope', 'contracts-redline'],
    ['flag-lowconf', 'flag-below-70'], ['route-by-load', 'flag-conf'],
    ['snooze', 'audit'],
    ['redlines-clause-lib', 'contracts-redline'], ['pricing-escalation', 'dual-over-1k'], ['counter-offer', 'vendor-verify-w9'],
    
    ['dashboard-refresh', 'access-admin'], ['route-by-load', 'rbac-scopes'],
    
    ['invoice-validate-po', 'vendor-verify-w9'], ['expense-categorize', 'gdpr'],
    ['route-by-territory', 'rbac-scopes'], ['snooze', 'zendesk-tickets'],
    ['auto-close', 'zendesk-tickets'], ['dashboard-refresh', 'currency-reporting'],
    ['prioritize', 'gdpr'], ['dashboard-refresh', 'access-viewer'],
    ['bookmeetings', 'calendar-no-double-book'], ['coordinate', 'calendar-buffer'],
    ['expense', 'expense-receipt-required'], ['expense-flag-outlier', 'expense-category-lock'],
    ['thread-digest', 'slack-retention'], ['route-owner', 'crm-audit-required'],

    ['call-notes-actionitems', 'calls-discovery'], ['thread-digest-weekly', 'rituals-standup'],
    ['draft-cold', 'emails-sequence'], ['draft-followup', 'emails-cadence'],
    ['proposals-pricing', 'pricing-playbook'], ['pricing-discount-cap', 'pricing-playbook'],
    ['boarddeck', 'strategy'], ['qbr', 'market-trends'],
    ['reconcile', 'departments'],
    ['prioritize', 'competitor-tracking'], ['crosscheck', 'positioning'],
    ['boarddeck', 'flow'], ['counter-offer', 'objection-handling'],
    ['negotiating', 'salesmethod'], ['pricing-escalation', 'pricing-bundles'],
    ['reporting', 'northstar'], ['searching', 'market'],
    ['call-notes-sentiment', 'objection-handling'], ['redlines-track-changes', 'contracts-redline'],

    ['crm-rules', 'sfdc'], ['crm-no-overwrite', 'sfdc-accounts'], ['crm-audit-required', 'audit'],
    ['slack-rules', 'slack'], ['soc2-controls', 'snowflake-warehouses'],
    ['gdpr-dsar', 'sfdc-contacts'], ['gdpr-consent', 'mailchimp'],
    ['currency-fx-lock', 'stripe-payouts'], ['vendor-verify-bank', 'brex'],
    ['access-admin', 'notion'], ['rbac-roles', 'jira'],
    ['ccpa', 'zendesk-tickets'], ['hipaa', 'intercom-chats'],
    ['calendar-rules', 'calendly'], ['expense-rules', 'ramp-cards'],
    ['contracts', 'ironclad'], ['outlook-r', 'outlook-c'],

    ['copy-tone', 'values-integrity'], ['copy-banned-words', 'communication-norms'],
    ['verify-numbers', 'competitor-tracking'],
    ['route-owner', 'leadership'], ['route-by-territory', 'departments'],
    ['copy-tone', 'communication-norms'],
    ['route-owner', 'flow'],
    ['audit', 'milestones'],
    ['vendor-verification', 'customers'], ['imagery', 'assets-logo'],
    ['voice-guidelines', 'values'], ['fonts', 'assets'],

    ['hubspot-sales', 'salesmethod'], ['outreach', 'emails-t'],
    ['zendesk', 'customers'], ['intercom', 'champions'],
    ['docusign', 'customers'], ['ironclad', 'customers'],
    ['linkedin-ads', 'positioning'], ['mailchimp', 'emails-t'],
    ['greenhouse', 'departments'], ['rippling', 'departments'],
    ['looker', 'qbr'], ['zoom', 'rituals-standup'],
    ['notion', 'communication-norms'], ['apollo', 'strategy'],
    ['chorus', 'objection-handling'], ['segment', 'market-trends'],
    ['freshdesk', 'renewal-signals'], ['bill-com', 'vendor-verification'],
    ['ramp', 'limits'], ['snowflake', 'northstar']
  ];

  function layoutTree() {
    var root = tree();
    var nodes = [], edges = [];
    var CAT_RADIUS = 0.24;
    var ORBIT_RADIUS = [0, 0, 0.15, 0.11, 0.05];
    var ORBIT_ARC_MAX = [0, 0, Math.PI * 1.7, Math.PI * 1.8, Math.PI * 1.8];

    function finalize(n, parent) {
      n.phase = Math.random() * Math.PI * 2;
      if (parent && !n.catColor) n.catColor = parent.catColor;
      nodes.push(n);
      if (parent) edges.push([parent, n]);
    }

    // `budget` bounds how wide this node's children may fan out, so a node with many
    // siblings (whose own slot is narrow) doesn't let its subtree spill into a neighbor's.
    function orbitChildren(n, budget) {
      if (!n.children || !n.children.length) return;
      var childTier = n.children[0].tier;
      var orbitR = ORBIT_RADIUS[childTier];
      var arc = Math.min(ORBIT_ARC_MAX[childTier], budget);
      var outward = (n.x === 0.5 && n.y === 0.5) ? 0 : Math.atan2(n.y - 0.5, n.x - 0.5);
      var count = n.children.length;
      var a0 = outward - arc / 2;
      var gap = arc / Math.max(count - 1, 1);
      var childBudget = Math.max(gap * 2.1, 0.3);
      n.children.forEach(function (c, i) {
        var angle = count === 1 ? outward : a0 + arc * (i / (count - 1));
        var rJitter = (Math.random() - 0.5) * 2 * orbitR * 0.18;
        var aJitter = (Math.random() - 0.5) * gap * 0.22;
        var r = orbitR + rJitter;
        var finalAngle = angle + aJitter;
        c.x = n.x + Math.cos(finalAngle) * r;
        c.y = n.y + Math.sin(finalAngle) * r;
        c.angle = Math.atan2(c.y - 0.5, c.x - 0.5);
        finalize(c, n);
        orbitChildren(c, childBudget);
      });
    }

    root.x = 0.5; root.y = 0.5; root.angle = 0;
    finalize(root, null);

    var wedges = { tl: [Math.PI, Math.PI * 1.5], tr: [Math.PI * 1.5, Math.PI * 2], br: [0, Math.PI * 0.5], bl: [Math.PI * 0.5, Math.PI] };
    root.children.forEach(function (cat) {
      var w = wedges[cat.quadrant];
      var angle = (w[0] + w[1]) / 2;
      cat.x = 0.5 + Math.cos(angle) * CAT_RADIUS;
      cat.y = 0.5 + Math.sin(angle) * CAT_RADIUS;
      cat.angle = angle;
      finalize(cat, root);
      orbitChildren(cat, ORBIT_ARC_MAX[2]);
    });

    var byId = {};
    nodes.forEach(function (n) { byId[n.id] = n; });
    var crossEdges = [];
    CROSS_LINKS.forEach(function (pair) {
      var a = byId[pair[0]], b = byId[pair[1]];
      if (a && b) crossEdges.push([a, b, true]);
    });

    return { nodes: nodes, edges: edges, crossEdges: crossEdges };
  }

  var sizeByTier = [16, 10, 6.5, 4, 2.5];
  var fontByTier = ['700 13px', '700 11px', '600 9.5px', '400 8px', '400 7px'];
  var labelOpacityByTier = [1, 1, 0.85, 0.55, 0.45];
  var dotAlphaByTier = [1, 1, 0.8, 0.6, 0.45];
  var shadowBlurByTier = [18, 16, 10, 6, 3];

  function colorForNode(c, n) {
    return n.tier === 0 ? c.core : (n.catColor || c.accent);
  }

  function setupCanvas(canvas) {
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var stage = canvas.parentElement;
    // The one line that is not verbatim. On the old site the CSS was inline in the same
    // document, so it could never arrive late; here styles.css is a separate request. An
    // in-flow canvas sized from its own parent's box feeds back into that box, and the
    // hero ran away to 17,900px before the stylesheet landed. Pin it out of flow first.
    canvas.style.position = 'absolute';
    canvas.style.inset = '0';
    var data = layoutTree();
    var mouse = { x: -9999, y: -9999 };
    var mouseActive = false;
    var parX = 0, parY = 0;
    var PARALLAX = reduceMotion ? 0 : 26;

    // The stage is pointer-events:none (the headline and buttons sit on top of it and have
    // to stay clickable), so it never receives a mousemove of its own and the parallax and
    // the node pull were both dead. Track on window instead and hit-test the canvas rect
    // by hand, which also means the graph keeps reacting while the cursor is over the copy.
    window.addEventListener('mousemove', function (e) {
      var rect = canvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var m = 80; // keep pulling for a moment after the cursor leaves the edge
      if (x < -m || y < -m || x > rect.width + m || y > rect.height + m) {
        mouse.x = -9999; mouse.y = -9999; mouseActive = false;
        return;
      }
      mouse.x = x; mouse.y = y;
      mouseActive = true;
    }, { passive: true });
    window.addEventListener('blur', function () { mouse.x = -9999; mouse.y = -9999; mouseActive = false; });
    document.addEventListener('mouseleave', function () { mouse.x = -9999; mouse.y = -9999; mouseActive = false; });

    var colors = {};
    function readColors() {
      var cs = getComputedStyle(canvas);
      colors.core = cs.getPropertyValue('--core').trim();
      colors.accent = cs.getPropertyValue('--accent').trim();
      colors.conn = cs.getPropertyValue('--conn').trim();
      colors.teal = cs.getPropertyValue('--teal').trim();
      colors.line = cs.getPropertyValue('--text-dim').trim();
      colors.text = cs.getPropertyValue('--text-dim').trim();
      colors.font = cs.getPropertyValue('--font-sans').split(',')[0].trim();
    }
    readColors();
    new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', readColors);

    var W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      var rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      W = rect.width; H = rect.height;
      canvas.width = W * DPR; canvas.height = H * DPR;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    if (window.ResizeObserver) {
      new ResizeObserver(resize).observe(stage);
    } else {
      window.addEventListener('resize', resize);
      setTimeout(resize, 300);
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      var pad = 42;

      var targetPx = mouseActive ? ((mouse.x / W) - 0.5) * PARALLAX : 0;
      var targetPy = mouseActive ? ((mouse.y / H) - 0.5) * PARALLAX : 0;
      parX += (targetPx - parX) * 0.06;
      parY += (targetPy - parY) * 0.06;

      var PULL_RADIUS = 140, PULL_STRENGTH = 16;
      data.nodes.forEach(function (n) {
        var amp = (reduceMotion || n.tier > 1) ? 0 : 4;
        var jx = amp ? Math.sin(t * 0.00038 + n.phase) * amp : 0;
        var jy = amp ? Math.cos(t * 0.00032 + n.phase) * amp : 0;
        var baseX = pad + n.x * (W - pad * 2) + jx + parX;
        var baseY = pad + n.y * (H - pad * 2) + jy + parY;

        var tOx = 0, tOy = 0;
        if (!reduceMotion && mouseActive) {
          var pdx = mouse.x - baseX, pdy = mouse.y - baseY;
          var dist = Math.sqrt(pdx * pdx + pdy * pdy);
          if (dist < PULL_RADIUS && dist > 0.01) {
            var pull = (1 - dist / PULL_RADIUS) * PULL_STRENGTH;
            tOx = (pdx / dist) * pull;
            tOy = (pdy / dist) * pull;
          }
        }
        n.ox = (n.ox || 0) + (tOx - (n.ox || 0)) * 0.15;
        n.oy = (n.oy || 0) + (tOy - (n.oy || 0)) * 0.15;

        n.px = baseX + n.ox;
        n.py = baseY + n.oy;
        var dx = mouse.x - n.px, dy = mouse.y - n.py;
        n.hot = Math.sqrt(dx * dx + dy * dy) < 42;
      });

      data.edges.forEach(function (pair) {
        var a = pair[0], b = pair[1];
        var hot = a.hot || b.hot;
        var deeper = a.tier >= b.tier ? a : b;
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = colorForNode(colors, deeper);
        ctx.globalAlpha = hot ? 0.9 : 0.32;
        ctx.lineWidth = hot ? 1.3 : 0.8;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      ctx.setLineDash([2, 4]);
      data.crossEdges.forEach(function (trip) {
        var a = trip[0], b = trip[1];
        var hot = a.hot || b.hot;
        var deeper = a.tier >= b.tier ? a : b;
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = colorForNode(colors, deeper);
        ctx.globalAlpha = hot ? 0.85 : 0.4;
        ctx.lineWidth = hot ? 1.2 : 0.9;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });
      ctx.setLineDash([]);

      data.nodes.forEach(function (n) {
        var c = colorForNode(colors, n);
        var r = sizeByTier[n.tier] + (n.hot ? 3 : 0);

        if (n.tier <= 1 || n.hot) {
          var grad = ctx.createRadialGradient(n.px, n.py, 0, n.px, n.py, r * 3);
          grad.addColorStop(0, c);
          grad.addColorStop(1, 'transparent');
          ctx.globalAlpha = n.hot ? 0.5 : 0.22;
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(n.px, n.py, r * 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        ctx.globalAlpha = n.hot ? 1 : dotAlphaByTier[n.tier];
        ctx.shadowColor = c;
        ctx.shadowBlur = shadowBlurByTier[n.tier] + (n.hot ? 8 : 0);
        ctx.beginPath();
        ctx.arc(n.px, n.py, r, 0, Math.PI * 2);
        ctx.fillStyle = c;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        if (n.tier > 1 && !n.hot) return;

        ctx.font = fontByTier[n.tier] + ' ' + colors.font;
        ctx.fillStyle = colors.text;
        ctx.globalAlpha = n.hot ? 1 : labelOpacityByTier[n.tier];
        ctx.textBaseline = 'middle';
        var dxDir = Math.cos(n.angle || 0);
        var labelX, align;
        if (n.tier === 0) { align = 'center'; labelX = n.px; }
        else if (dxDir >= 0) { align = 'left'; labelX = n.px + r + 6; }
        else { align = 'right'; labelX = n.px - r - 6; }
        ctx.textAlign = align;
        var labelY = n.tier === 0 ? n.py + r + 15 : n.py;
        ctx.fillText(n.label, labelX, labelY);
        if (n.sub) {
          ctx.font = '400 8px ' + colors.font;
          ctx.globalAlpha *= 0.7;
          ctx.fillText(n.sub, labelX, labelY + 11);
        }
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }

  setupCanvas(document.getElementById('graph-bg'));
})();

export interface R9Result { tf: string; policy: string; cost: string }
export interface R9Template extends R9Result { match: string[] }

export const R9_EXAMPLES = [
  { label: "Staging for payments API", prompt: "Add a staging environment for the payments API — Postgres, Redis and two app nodes in eu-west-1" },
  { label: "On-prem Proxmox VM", prompt: "Add a Proxmox VM for the SAP integration test, cloned from our hardened RHEL template" },
  { label: "Azure storage account", prompt: "Create an Azure storage account for build artifacts with public access disabled" },
  { label: "Fix a security finding", prompt: "Fix the Checkov finding on the API security group" },
];

export const R9_TEMPLATES: R9Template[] = [
  {
    match: ["proxmox", "on-prem", "onprem", "vcenter", "vm", "sap", "hardened"],
    tf: `<span class="c-com"># proposed change · modules/sap-int/main.tf</span>
<span class="c-key">resource</span> <span class="c-str">"proxmox_vm_qemu"</span> <span class="c-str">"sap_integration"</span> {
  name        = <span class="c-str">"sap-int-01"</span>
  target_node = var.target_node
  clone       = <span class="c-str">"rhel9-hardened"</span>
  cores       = <span class="c-num">8</span>
  memory      = <span class="c-num">32768</span>

  disk {
    size    = <span class="c-str">"200G"</span>
    storage = var.storage_pool
  }
  network {
    bridge = var.network_bridge
    model  = <span class="c-str">"virtio"</span>
  }
}`,
    policy: `<span class="c-dim">policy profile</span>   on-prem-baseline
<span class="c-dim">enforcement</span>      soft-mandatory

<span class="c-ok">✓ checkov</span>          no failed checks
<span class="c-ok">✓ trufflehog</span>       no secrets detected

<span class="c-ok">ready for a plan run</span>`,
    cost: `<span class="c-dim">Cost estimates apply to supported cloud resources.</span>
<span class="c-dim">This change targets an on-prem Proxmox host, so no</span>
<span class="c-dim">cloud cost increase is expected.</span>

<span class="c-ok">✓ cost thresholds not affected</span>`,
  },
  {
    match: ["azure", "storage", "blob", "artifact"],
    tf: `<span class="c-com"># proposed change · storage.tf</span>
<span class="c-key">resource</span> <span class="c-str">"azurerm_storage_account"</span> <span class="c-str">"artifacts"</span> {
  name                            = <span class="c-str">"buildartifacts"</span>
  resource_group_name             = var.resource_group
  location                        = var.location
  account_tier                    = <span class="c-str">"Standard"</span>
  account_replication_type        = <span class="c-str">"ZRS"</span>
  min_tls_version                 = <span class="c-str">"TLS1_2"</span>
  allow_nested_items_to_be_public = <span class="c-key">false</span>
  public_network_access_enabled   = <span class="c-key">false</span>

  tags = var.tags
}`,
    policy: `<span class="c-dim">policy profile</span>   azure-standard
<span class="c-dim">enforcement</span>      hard-mandatory

<span class="c-ok">✓ checkov</span>          public access disabled
<span class="c-ok">✓ checkov</span>          minimum TLS 1.2
<span class="c-ok">✓ trufflehog</span>       no secrets detected

<span class="c-ok">ready for a plan run</span>`,
    cost: `<span class="c-dim">estimated monthly cost</span>     usage-based
<span class="c-dim">note</span>  storage cost depends on data stored and
      transactions; the estimate is refined once
      a plan runs with Infracost enabled.`,
  },
  {
    match: ["fix", "finding", "security group", "checkov", "ckv"],
    tf: `<span class="c-com"># proposed change · network.tf</span>
<span class="c-key">resource</span> <span class="c-str">"aws_security_group_rule"</span> <span class="c-str">"api_ingress"</span> {
  type              = <span class="c-str">"ingress"</span>
  from_port         = <span class="c-num">443</span>
  to_port           = <span class="c-num">443</span>
  protocol          = <span class="c-str">"tcp"</span>
<span class="c-warn">- cidr_blocks       = ["0.0.0.0/0"]</span>
<span class="c-ok">+ cidr_blocks       = var.allowed_cidrs</span>
<span class="c-ok">+ description       = "HTTPS from approved ranges"</span>
  security_group_id = aws_security_group.api.id
}`,
    policy: `<span class="c-dim">before</span>
<span class="c-warn">✗ checkov</span>          ingress open to 0.0.0.0/0
<span class="c-warn">⚑ checkov</span>          rule has no description

<span class="c-dim">after</span>
<span class="c-ok">✓ checkov</span>          ingress limited to approved ranges
<span class="c-ok">✓ checkov</span>          rule described

<span class="c-ok">finding resolved · review the diff before committing</span>`,
    cost: `<span class="c-dim">estimated monthly cost change</span>   none

<span class="c-ok">✓ within cost thresholds</span>`,
  },
];

export const R9_DEFAULT: R9Result = {
  tf: `<span class="c-com"># proposed change · environments/staging/main.tf</span>
<span class="c-key">module</span> <span class="c-str">"payments_staging"</span> {
  source = <span class="c-str">"../../modules/app-env"</span>
  region = <span class="c-str">"eu-west-1"</span>

  app_nodes     = <span class="c-num">2</span>
  instance_type = <span class="c-str">"t3.large"</span>

  postgres = { version = <span class="c-str">"16"</span>, instance_class = <span class="c-str">"db.t4g.medium"</span> }
  redis    = { version = <span class="c-str">"7"</span>,  node_type      = <span class="c-str">"cache.t4g.small"</span> }

  tags = {
    service = <span class="c-str">"payments-api"</span>
    env     = <span class="c-str">"staging"</span>
    owner   = <span class="c-str">"team-payments"</span>
  }
}`,
  policy: `<span class="c-dim">policy profile</span>   aws-standard
<span class="c-dim">enforcement</span>      soft-mandatory

<span class="c-ok">✓ checkov</span>          encryption at rest enabled
<span class="c-warn">⚑ checkov</span>          security group rule lacks description
<span class="c-ok">✓ trivy</span>            no misconfigurations found
<span class="c-ok">✓ trufflehog</span>       no secrets detected

<span class="c-dim">1 warning · review before approval</span>`,
  cost: `<span class="c-dim">estimated monthly cost</span>      shown after plan
<span class="c-dim">cost increase threshold</span>     set in policy profile

<span class="c-dim">When the project's policy profile includes</span>
<span class="c-dim">Infracost, the plan records the estimated</span>
<span class="c-dim">monthly cost and checks it against the</span>
<span class="c-dim">thresholds before apply.</span>`,
};

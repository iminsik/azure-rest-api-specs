/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * Reference to another subresource.
 */
export interface SubResource {
  /**
   * Resource ID.
   */
  id?: string;
}

/**
 * ThreatIntel Whitelist for Firewall Policy.
 */
export interface FirewallPolicyThreatIntelWhitelist {
  /**
   * List of IP addresses for the ThreatIntel Whitelist.
   */
  ipAddresses?: string[];
  /**
   * List of FQDNs for the ThreatIntel Whitelist.
   */
  fqdns?: string[];
}

/**
 * DNS Proxy Settings in Firewall Policy.
 */
export interface DnsSettings {
  /**
   * List of Custom DNS Servers.
   */
  servers?: string[];
  /**
   * Enable DNS Proxy on Firewalls attached to the Firewall Policy.
   */
  enableProxy?: boolean;
  /**
   * FQDNs in Network Rules are supported when set to true.
   */
  requireProxyForNetworkRules?: boolean;
}

/**
 * Intrusion detection signatures specification states.
 */
export interface FirewallPolicyIntrusionDetectionSignatureSpecification {
  /**
   * Signature id
   */
  id?: string;
  /**
   * The signature state. Possible values include: 'Off', 'Alert', 'Deny'
   */
  mode?: FirewallPolicyIntrusionDetectionStateType;
}

/**
 * Intrusion detection bypass traffic specification.
 */
export interface FirewallPolicyIntrusionDetectionBypassTrafficSpecifications {
  /**
   * Name of the bypass traffic rule.
   */
  name?: string;
  /**
   * Description of the bypass traffic rule.
   */
  description?: string;
  /**
   * The rule bypass protocol. Possible values include: 'TCP', 'UDP', 'ICMP', 'ANY'
   */
  protocol?: FirewallPolicyIntrusionDetectionProtocol;
  /**
   * List of source IP addresses or ranges for this rule.
   */
  sourceAddresses?: string[];
  /**
   * List of destination IP addresses or ranges for this rule.
   */
  destinationAddresses?: string[];
  /**
   * List of destination ports or ranges.
   */
  destinationPorts?: string[];
  /**
   * List of source IpGroups for this rule.
   */
  sourceIpGroups?: string[];
  /**
   * List of destination IpGroups for this rule.
   */
  destinationIpGroups?: string[];
}

/**
 * The operation for configuring intrusion detection.
 */
export interface FirewallPolicyIntrusionDetectionConfiguration {
  /**
   * List of specific signatures states.
   */
  signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureSpecification[];
  /**
   * List of rules for traffic to bypass.
   */
  bypassTrafficSettings?: FirewallPolicyIntrusionDetectionBypassTrafficSpecifications[];
}

/**
 * Configuration for intrusion detection mode and rules.
 */
export interface FirewallPolicyIntrusionDetection {
  /**
   * Intrusion detection general state. Possible values include: 'Off', 'Alert', 'Deny'
   */
  mode?: FirewallPolicyIntrusionDetectionStateType;
  /**
   * Intrusion detection configuration properties.
   */
  configuration?: FirewallPolicyIntrusionDetectionConfiguration;
}

/**
 * Trusted Root certificates properties for tls.
 */
export interface FirewallPolicyCertificateAuthority {
  /**
   * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in
   * KeyVault.
   */
  keyVaultSecretId?: string;
  /**
   * Name of the CA certificate.
   */
  name?: string;
}

/**
 * Configuration needed to perform TLS termination & initiation.
 */
export interface FirewallPolicyTransportSecurity {
  /**
   * The CA used for intermediate CA generation.
   */
  certificateAuthority?: FirewallPolicyCertificateAuthority;
}

/**
 * An interface representing ManagedServiceIdentityUserAssignedIdentitiesValue.
 */
export interface ManagedServiceIdentityUserAssignedIdentitiesValue {
  /**
   * The principal id of user assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The client id of user assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly clientId?: string;
}

/**
 * Identity for the resource.
 */
export interface ManagedServiceIdentity {
  /**
   * The principal id of the system assigned identity. This property will only be provided for a
   * system assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly principalId?: string;
  /**
   * The tenant id of the system assigned identity. This property will only be provided for a
   * system assigned identity.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tenantId?: string;
  /**
   * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes
   * both an implicitly created identity and a set of user assigned identities. The type 'None'
   * will remove any identities from the virtual machine. Possible values include:
   * 'SystemAssigned', 'UserAssigned', 'SystemAssigned, UserAssigned', 'None'
   */
  type?: ResourceIdentityType;
  /**
   * The list of user identities associated with resource. The user identity dictionary key
   * references will be ARM resource ids in the form:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   */
  userAssignedIdentities?: { [propertyName: string]: ManagedServiceIdentityUserAssignedIdentitiesValue };
}

/**
 * Common resource representation.
 */
export interface Resource {
  /**
   * Resource ID.
   */
  id?: string;
  /**
   * Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Resource location.
   */
  location?: string;
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * FirewallPolicy Resource.
 */
export interface FirewallPolicy extends Resource {
  /**
   * List of references to FirewallPolicyRuleCollectionGroups.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly ruleCollectionGroups?: SubResource[];
  /**
   * The provisioning state of the firewall policy resource. Possible values include: 'Succeeded',
   * 'Updating', 'Deleting', 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The parent firewall policy from which rules are inherited.
   */
  basePolicy?: SubResource;
  /**
   * List of references to Azure Firewalls that this Firewall Policy is associated with.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly firewalls?: SubResource[];
  /**
   * List of references to Child Firewall Policies.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly childPolicies?: SubResource[];
  /**
   * The operation mode for Threat Intelligence. Possible values include: 'Alert', 'Deny', 'Off'
   */
  threatIntelMode?: AzureFirewallThreatIntelMode;
  /**
   * ThreatIntel Whitelist for Firewall Policy.
   */
  threatIntelWhitelist?: FirewallPolicyThreatIntelWhitelist;
  /**
   * DNS Proxy Settings definition.
   */
  dnsSettings?: DnsSettings;
  /**
   * The configuration for Intrusion detection.
   */
  intrusionDetection?: FirewallPolicyIntrusionDetection;
  /**
   * TLS Configuration definition.
   */
  transportSecurity?: FirewallPolicyTransportSecurity;
  /**
   * A unique read-only string that changes whenever the resource is updated.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
  /**
   * The identity of the firewall policy.
   */
  identity?: ManagedServiceIdentity;
}

/**
 * Contains the possible cases for FirewallPolicyRuleCollection.
 */
export type FirewallPolicyRuleCollectionUnion = FirewallPolicyRuleCollection | FirewallPolicyNatRuleCollection | FirewallPolicyFilterRuleCollection;

/**
 * Properties of the rule collection.
 */
export interface FirewallPolicyRuleCollection {
  /**
   * Polymorphic Discriminator
   */
  ruleCollectionType: "FirewallPolicyRuleCollection";
  /**
   * The name of the rule collection.
   */
  name?: string;
  /**
   * Priority of the Firewall Policy Rule Collection resource.
   */
  priority?: number;
}

/**
 * Rule Collection Group resource.
 */
export interface FirewallPolicyRuleCollectionGroup extends SubResource {
  /**
   * Priority of the Firewall Policy Rule Collection Group resource.
   */
  priority?: number;
  /**
   * Group of Firewall Policy rule collections.
   */
  ruleCollections?: FirewallPolicyRuleCollectionUnion[];
  /**
   * The provisioning state of the firewall policy rule collection group resource. Possible values
   * include: 'Succeeded', 'Updating', 'Deleting', 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The name of the resource that is unique within a resource group. This name can be used to
   * access the resource.
   */
  name?: string;
  /**
   * A unique read-only string that changes whenever the resource is updated.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
  /**
   * Rule Group type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * Properties of the FirewallPolicyNatRuleCollectionAction.
 */
export interface FirewallPolicyNatRuleCollectionAction {
  /**
   * The type of action. Possible values include: 'DNAT'
   */
  type?: FirewallPolicyNatRuleCollectionActionType;
}

/**
 * Contains the possible cases for FirewallPolicyRule.
 */
export type FirewallPolicyRuleUnion = FirewallPolicyRule | ApplicationRule | NatRule | NetworkRule;

/**
 * Properties of a rule.
 */
export interface FirewallPolicyRule {
  /**
   * Polymorphic Discriminator
   */
  ruleType: "FirewallPolicyRule";
  /**
   * Name of the rule.
   */
  name?: string;
  /**
   * Description of the rule.
   */
  description?: string;
}

/**
 * Firewall Policy NAT Rule Collection.
 */
export interface FirewallPolicyNatRuleCollection {
  /**
   * Polymorphic Discriminator
   */
  ruleCollectionType: "FirewallPolicyNatRuleCollection";
  /**
   * The name of the rule collection.
   */
  name?: string;
  /**
   * Priority of the Firewall Policy Rule Collection resource.
   */
  priority?: number;
  /**
   * The action type of a Nat rule collection.
   */
  action?: FirewallPolicyNatRuleCollectionAction;
  /**
   * List of rules included in a rule collection.
   */
  rules?: FirewallPolicyRuleUnion[];
}

/**
 * Properties of the FirewallPolicyFilterRuleCollectionAction.
 */
export interface FirewallPolicyFilterRuleCollectionAction {
  /**
   * The type of action. Possible values include: 'Allow', 'Deny'
   */
  type?: FirewallPolicyFilterRuleCollectionActionType;
}

/**
 * Firewall Policy Filter Rule Collection.
 */
export interface FirewallPolicyFilterRuleCollection {
  /**
   * Polymorphic Discriminator
   */
  ruleCollectionType: "FirewallPolicyFilterRuleCollection";
  /**
   * The name of the rule collection.
   */
  name?: string;
  /**
   * Priority of the Firewall Policy Rule Collection resource.
   */
  priority?: number;
  /**
   * The action type of a Filter rule collection.
   */
  action?: FirewallPolicyFilterRuleCollectionAction;
  /**
   * List of rules included in a rule collection.
   */
  rules?: FirewallPolicyRuleUnion[];
}

/**
 * Properties of the application rule protocol.
 */
export interface FirewallPolicyRuleApplicationProtocol {
  /**
   * Protocol type. Possible values include: 'Http', 'Https'
   */
  protocolType?: FirewallPolicyRuleApplicationProtocolType;
  /**
   * Port number for the protocol, cannot be greater than 64000.
   */
  port?: number;
}

/**
 * Rule of type application.
 */
export interface ApplicationRule {
  /**
   * Polymorphic Discriminator
   */
  ruleType: "ApplicationRule";
  /**
   * Name of the rule.
   */
  name?: string;
  /**
   * Description of the rule.
   */
  description?: string;
  /**
   * List of source IP addresses for this rule.
   */
  sourceAddresses?: string[];
  /**
   * List of destination IP addresses or Service Tags.
   */
  destinationAddresses?: string[];
  /**
   * Array of Application Protocols.
   */
  protocols?: FirewallPolicyRuleApplicationProtocol[];
  /**
   * List of FQDNs for this rule.
   */
  targetFqdns?: string[];
  /**
   * List of Urls for this rule condition.
   */
  targetUrls?: string[];
  /**
   * List of FQDN Tags for this rule.
   */
  fqdnTags?: string[];
  /**
   * List of source IpGroups for this rule.
   */
  sourceIpGroups?: string[];
  /**
   * Terminate TLS connections for this rule.
   */
  terminateTLS?: boolean;
}

/**
 * Rule of type nat.
 */
export interface NatRule {
  /**
   * Polymorphic Discriminator
   */
  ruleType: "NatRule";
  /**
   * Name of the rule.
   */
  name?: string;
  /**
   * Description of the rule.
   */
  description?: string;
  /**
   * Array of FirewallPolicyRuleNetworkProtocols.
   */
  ipProtocols?: FirewallPolicyRuleNetworkProtocol[];
  /**
   * List of source IP addresses for this rule.
   */
  sourceAddresses?: string[];
  /**
   * List of destination IP addresses or Service Tags.
   */
  destinationAddresses?: string[];
  /**
   * List of destination ports.
   */
  destinationPorts?: string[];
  /**
   * The translated address for this NAT rule.
   */
  translatedAddress?: string;
  /**
   * The translated port for this NAT rule.
   */
  translatedPort?: string;
  /**
   * List of source IpGroups for this rule.
   */
  sourceIpGroups?: string[];
}

/**
 * Rule of type network.
 */
export interface NetworkRule {
  /**
   * Polymorphic Discriminator
   */
  ruleType: "NetworkRule";
  /**
   * Name of the rule.
   */
  name?: string;
  /**
   * Description of the rule.
   */
  description?: string;
  /**
   * Array of FirewallPolicyRuleNetworkProtocols.
   */
  ipProtocols?: FirewallPolicyRuleNetworkProtocol[];
  /**
   * List of source IP addresses for this rule.
   */
  sourceAddresses?: string[];
  /**
   * List of destination IP addresses or Service Tags.
   */
  destinationAddresses?: string[];
  /**
   * List of destination ports.
   */
  destinationPorts?: string[];
  /**
   * List of source IpGroups for this rule.
   */
  sourceIpGroups?: string[];
  /**
   * List of destination IpGroups for this rule.
   */
  destinationIpGroups?: string[];
  /**
   * List of destination FQDNs.
   */
  destinationFqdns?: string[];
}

/**
 * Response for ListFirewallPolicies API service call.
 */
export interface FirewallPolicyListResult {
  /**
   * List of Firewall Policies in a resource group.
   */
  value?: FirewallPolicy[];
  /**
   * URL to get the next set of results.
   */
  nextLink?: string;
}

/**
 * Response for ListFirewallPolicyRuleCollectionGroups API service call.
 */
export interface FirewallPolicyRuleCollectionGroupListResult {
  /**
   * List of FirewallPolicyRuleCollectionGroups in a FirewallPolicy.
   */
  value?: FirewallPolicyRuleCollectionGroup[];
  /**
   * URL to get the next set of results.
   */
  nextLink?: string;
}

/**
 * An error response from the service.
 */
export interface CloudErrorBody {
  /**
   * An identifier for the error. Codes are invariant and are intended to be consumed
   * programmatically.
   */
  code?: string;
  /**
   * A message describing the error, intended to be suitable for display in a user interface.
   */
  message?: string;
  /**
   * The target of the particular error. For example, the name of the property in error.
   */
  target?: string;
  /**
   * A list of additional details about the error.
   */
  details?: CloudErrorBody[];
}

/**
 * An error response from the service.
 */
export interface CloudError {
  /**
   * Cloud error body.
   */
  error?: CloudErrorBody;
}

/**
 * An interface representing NetworkManagementClientOptions.
 */
export interface NetworkManagementClientOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface FirewallPoliciesGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Expands referenced resources.
   */
  expand?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Succeeded', 'Updating', 'Deleting', 'Failed'
 * @readonly
 * @enum {string}
 */
export enum ProvisioningState {
  Succeeded = 'Succeeded',
  Updating = 'Updating',
  Deleting = 'Deleting',
  Failed = 'Failed',
}

/**
 * Defines values for AzureFirewallThreatIntelMode.
 * Possible values include: 'Alert', 'Deny', 'Off'
 * @readonly
 * @enum {string}
 */
export enum AzureFirewallThreatIntelMode {
  Alert = 'Alert',
  Deny = 'Deny',
  Off = 'Off',
}

/**
 * Defines values for FirewallPolicyIntrusionDetectionStateType.
 * Possible values include: 'Off', 'Alert', 'Deny'
 * @readonly
 * @enum {string}
 */
export enum FirewallPolicyIntrusionDetectionStateType {
  Off = 'Off',
  Alert = 'Alert',
  Deny = 'Deny',
}

/**
 * Defines values for FirewallPolicyIntrusionDetectionProtocol.
 * Possible values include: 'TCP', 'UDP', 'ICMP', 'ANY'
 * @readonly
 * @enum {string}
 */
export enum FirewallPolicyIntrusionDetectionProtocol {
  TCP = 'TCP',
  UDP = 'UDP',
  ICMP = 'ICMP',
  ANY = 'ANY',
}

/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned', 'UserAssigned', 'SystemAssigned, UserAssigned',
 * 'None'
 * @readonly
 * @enum {string}
 */
export enum ResourceIdentityType {
  SystemAssigned = 'SystemAssigned',
  UserAssigned = 'UserAssigned',
  SystemAssignedUserAssigned = 'SystemAssigned, UserAssigned',
  None = 'None',
}

/**
 * Defines values for FirewallPolicyNatRuleCollectionActionType.
 * Possible values include: 'DNAT'
 * @readonly
 * @enum {string}
 */
export enum FirewallPolicyNatRuleCollectionActionType {
  DNAT = 'DNAT',
}

/**
 * Defines values for FirewallPolicyFilterRuleCollectionActionType.
 * Possible values include: 'Allow', 'Deny'
 * @readonly
 * @enum {string}
 */
export enum FirewallPolicyFilterRuleCollectionActionType {
  Allow = 'Allow',
  Deny = 'Deny',
}

/**
 * Defines values for FirewallPolicyRuleApplicationProtocolType.
 * Possible values include: 'Http', 'Https'
 * @readonly
 * @enum {string}
 */
export enum FirewallPolicyRuleApplicationProtocolType {
  Http = 'Http',
  Https = 'Https',
}

/**
 * Defines values for FirewallPolicyRuleNetworkProtocol.
 * Possible values include: 'TCP', 'UDP', 'Any', 'ICMP'
 * @readonly
 * @enum {string}
 */
export enum FirewallPolicyRuleNetworkProtocol {
  TCP = 'TCP',
  UDP = 'UDP',
  Any = 'Any',
  ICMP = 'ICMP',
}

/**
 * Contains response data for the get operation.
 */
export type FirewallPoliciesGetResponse = FirewallPolicy & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallPolicy;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type FirewallPoliciesCreateOrUpdateResponse = FirewallPolicy & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallPolicy;
    };
};

/**
 * Contains response data for the list operation.
 */
export type FirewallPoliciesListResponse = FirewallPolicyListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallPolicyListResult;
    };
};

/**
 * Contains response data for the listAll operation.
 */
export type FirewallPoliciesListAllResponse = FirewallPolicyListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallPolicyListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type FirewallPolicyRuleCollectionGroupsGetResponse = FirewallPolicyRuleCollectionGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallPolicyRuleCollectionGroup;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type FirewallPolicyRuleCollectionGroupsCreateOrUpdateResponse = FirewallPolicyRuleCollectionGroup & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallPolicyRuleCollectionGroup;
    };
};

/**
 * Contains response data for the list operation.
 */
export type FirewallPolicyRuleCollectionGroupsListResponse = FirewallPolicyRuleCollectionGroupListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallPolicyRuleCollectionGroupListResult;
    };
};

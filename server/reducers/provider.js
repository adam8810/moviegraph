module.exports = (provider) => ({
  id: provider.provider_id,
  name: provider.provider_name,
  logo_path: provider.logo_path,
  display_priority: provider.display_priority,
});
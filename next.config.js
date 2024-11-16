/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  env: {

  // Spread_Sheets_LicenseKey : "E834567462494946#B1tdke5EWWENFcr5UOj9mYpBzdqBHe5h4Q7h5S4QUQMpVbmZUMitiY7YnQGxGM0lmNrJka8oHNY3kWaJ4ZWh4MIZWQUhmUDdkZWhjMyomdMNlUlpXU056KnVTQ4gXd654SklXck3SWBV5M6xWajVjeq5kQ7UmYGFkMxxWd0plcm5mbRNERBF6M034c8JXch9Ec7V5KOVEUGpkMJBjUVpVcTBHdwVmU9UHMilGbB3kdxg4ZGJ7KIVmRmNHWMp6cXFGeQ5kaEJEbYVXepd5ZxYXdrMzbup7UypUeZNFatljax5Ge7MGbUtyLOd4QadGa5dTVpNWa9F5S8IkI0IyUiwiI6U4QyYDRiojIIJCLwMTO8MjM9QjN0IicfJye#4Xfd5nIXR5QaJiOiMkIsIiNx8idgMlSgQWYlJHcTJiOi8kI1tlOiQmcQJCLicDNzEzMwAyNyETMzIDMyIiOiQncDJCLicjMyEzMyAjMiojIwhXRiwiIzNWa4lHbhhXZIJiOiEmTDJCLlVnc4pjIsZXRiwiI6QTO4kDNyYDN7YTN4MDOiojIklkIs4XXiUGbiFGV43mdpBlIbpjInxmZiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34TQnx6ZIR7U8s6LBpWRx4mcRd7dQdHUkJzbGhXbpNkQ5ETa8MmdppkVygUYQtmSOFldkp5N6hETvhkRrBFOIpHd4A5MWp5LzYWbUJmUi3iY8J6S4tWSLFWM8JDMgR8S",

  // Sheets_Designer_LicenseKey : "Hexalytics,E522298664351836#B1HcNJzZSdUdzRVNMRjRplXQFJkYqh4d5NGSalERL5mQ95WOSVFbxcGU62GZvFFZtJXa8ZnMotyVmtGNnpmUyMFVzg7TrplVRh6UJlmYzZ5T5ZHSYJmd9tWd0ZGbrJHZ8FHUrUjNuV7SX3GNZp7SyEXQKtWe9RFVFVzVh9kaVh6L5ZVam9mZro6YU3SVwQ7UjBVe8JTerRWR8UDc7kTaalnV9EVVwUWWtRnVj96dVZkWwhHa8VERRVkQsNXW8IjbRRkemFVWrJXV854NztSTjJkamh6LMdFNLVlZ6JFbZF5UR3mYOVzSKF5Mml5Y5RXUOl5UD34LENzS5wkVx3UeoJiOiMlIsIiQ7UTNCBzQiojIIJCL7EDMzQDMyEjM0IicfJye#4Xfd5nINBVO7IiOiMkIsIiNx8idg86bkRWQtIXZudWazVGRtMlSkFWZyB7UiojIOJyebpjIkJHUiwiI8ITNxMDMgcjMxEzMyAjMiojI4J7QiwiI7IjMxMjMwIjI0ICc8VkIsIycjlGd9xWY8VGSiojIh94QiwSZ5JHd0ICb6VkIsIiNzgTM5MDN6YDO9IjMyUjI0ICZJJCL35lIlxmYhRFdvZXaQJyW0IyZsZmIsU6csFmZ0IiczRmI1pjIs9WQisnOiQkIsISP3cWViJXNz84YPF4akpEcxI6UIJmbiRnMGZWUYl7ZvATONxEUWpFWMN4a5AzQhlUVpRVcMVHSKZGMulHRIRmZvonczsEapJUbipEMjdDV6gHc85GSvkvb3d",
      //  deployment
      // REACT_APP_URI:"https://redingtiondistributionsnowflakeapi-wckqd7o3eq-uw.a.run.app",

      //  local
      REACT_APP_URI: 'https://localhost:8081/', 

  //  AWS
  // REACT_APP_URI: 'https://172.20.36.39:8081/',

  // Production
  // REACT_APP_URI: 'https://analytics.redingtongroup.com/',
},
eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true,
},
images: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  unoptimized: true,
},
};

module.exports = nextConfig;

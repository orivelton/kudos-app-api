module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'fcab12ff3f7d00ebac13291997b58fd3'),
    },
  },
  url: "https://parser-kudos-app.herokuapp.com"
});

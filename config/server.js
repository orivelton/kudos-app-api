module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '76a4ed1f440cf00f5e8d875fcc9d338a'),
    },
  },
  url: "https://parser-kudos-app.herokuapp.com"
});

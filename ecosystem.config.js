module.exports = {
  apps : [{
    name: 'API',
    script: 'node -r esm',
    
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    }, 
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : 'agile-bayou-34724.herokuapp.com',
      ref  : 'origin/master',
      repo : 'garibaldy@github.com/API.git',
      path : '/var/www/production',
 
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
     
    }
  }
};

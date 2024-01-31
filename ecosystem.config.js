module.exports = {
  apps: [{
    script: 'npm start'
  }],

  deploy: {
    production: {
      key: '../Secrets/key.pem',
      user: 'ubuntu',
      host: '52.91.107.152',
      ref: 'origin/main',
      repo: 'https://github.com/dsrathore1/Blog.git',
      path: '/home/ubuntu/app',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};

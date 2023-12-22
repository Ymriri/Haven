module.exports = {
  write: {
    platform: 'yuque-pwd',
    // Token 模式（需要语雀超级会员）
    yuque: {
      token: process.env.YUQUE_TOKEN,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: true,
      onlyPublished: true,
    },
    // 账号密码模式
    "yuque-pwd": {
      username: process.env.YUQUE_USERNAME,
      password: process.env.YUQUE_PASSWORD,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      linebreak: false
    }
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/',
      filename: 'title',
      format: 'matter-markdown',
      catalog: true,
      // formatExt: './elog.format.js',
      frontMatter: {
        enable: true,
        include: ['top','descriptionHTML','sticky','publish','tag','description',
          'recommend'], // 只输出include包含的属性
        exclude: [], // 不输出exclude包含的属性
      }
    }
  },
  image: {
    enable: true,
    platform: 'local',
    local: {
      outputDir: './docs/images',
      pathFollowDoc: true,
    }
  }
}
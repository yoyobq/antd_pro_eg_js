export default {
  // 响应来自 /api/reqDemo 的 post 方式的请求
  'POST /api/reqDemo': (req, res) => {
    res.status(200).send({
      success: true,
      data: {
        sayHi: 'hi',
      },
    });
  },
};

/* eslint-disable */
import { request } from 'umi';

export async function reqDemo(body) {
  return request('/api/reqDemo', {
    // 1 包括了请求方式，get 或 post
    method: 'post',
    // 2 包括了头文件，比如这里的头文件向后台说明，
    //   我这个请求的具体要求是以 json 格式打包的
    headers: {
      'Content-Type': 'application/json',
    },
    // 3 包括了 body，也就是请求的具体内容，
    //   对于这个登录验证请求来说，显然会包含用户名，密码等基本信息
    //   而这些信息是 json 格式封装的，往下会有具体的演示代码
    data: body,
    // ...(options || {}),
  });
}

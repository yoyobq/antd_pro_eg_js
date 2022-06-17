import { reqDemo } from '@/services/ant-design-pro/reqDemo';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, message } from 'antd';
import { useState } from 'react';

const ReqDemo = () => {
  const [reqTime, setReqTime] = useState(0);
  const [resTime, setResTime] = useState(0);
  // async / await 是语法糖，可以让异步代码变同步
  const handleClick = async () => {
    // 尝试执行 try 中的代码
    try {
      // 提出的请求附带数据为空对象，演示用
      // const data = {};
      // 把当前时间作为 data 的内容随着 request 一起发送
      setReqTime(Date.now());
      const data = {
        reqTime,
      };
      // reqDemo 是异步的，
      // await 关键字保证了需要等 reqDemo() 给出 return
      // 才会执行接下去的代码

      // 把当前时间作为 data 的内容随着 request 一起发送
      // 等待后台响应，并把响应结果存入 res
      const res = await reqDemo({ ...data });

      // 如果收到成功信号
      if (res.success) {
        // 从响应数据中取出后台生成的响应时间并改变 state
        setResTime(res.data.resTime);
      }
    } catch (error) {
      // 一旦 try 中的代码出错，则执行 catch 中的代码
      message.error('error');
    }
  };

  return (
    <PageContainer>
      <Card>
        <h1>演示前后台通信</h1>
        <Button type="primary" onClick={handleClick}>
          点我发送请求
        </Button>
        <p />
        {/* 用于在页面上显示请求、响应时间的代码 */}
        {reqTime ? <div>请求发送时间戳: {reqTime}</div> : null}
        {resTime ? <div>响应发送时间戳: {resTime}</div> : null}
        {resTime ? <div>响应间隔: {resTime - reqTime} 毫秒</div> : null}
      </Card>
    </PageContainer>
  );
};

export default ReqDemo;

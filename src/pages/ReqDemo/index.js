import { reqDemo } from '@/services/ant-design-pro/reqDemo';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, message } from 'antd';

const ReqDemo = () => {
  // async / await 是语法糖，可以让异步代码变同步
  const handleClick = async () => {
    // 尝试执行 try 中的代码
    try {
      // 提出的请求附带数据为空对象，演示用
      const data = {};
      // reqDemo 是异步的，
      // await 关键字保证了需要等 reqDemo() 给出 return
      // 才会执行接下去的代码
      const msg = await reqDemo({ ...data });

      if (msg.success) {
        message.success('success');
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
      </Card>
    </PageContainer>
  );
};

export default ReqDemo;

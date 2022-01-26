import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card } from 'antd';
import { useModel } from 'umi';
// import styles from './Welcome.less'; // 样式部分暂时不用

const HelloWorld = () => {
  const message = useModel('demoModel');
  const { number } = useModel('counter', (ret) => ({
    number: ret.counter,
  }));

  return (
    <PageContainer>
      <Card>
        <h1>Hello World</h1>
        <Button type="primary" danger>
          迎难而上，开始学习
        </Button>
      </Card>
      <Card>
        <div>{message}</div>
      </Card>
      <Card>
        <div>{number}</div>
      </Card>
    </PageContainer>
  );
};

export default HelloWorld;

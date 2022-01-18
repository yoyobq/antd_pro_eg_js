import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
// import styles from './Welcome.less'; // 样式部分暂时不用

const HelloWorld = () => {
  return (
    <PageContainer>
      <Card>
        <h1>Hello World</h1>
      </Card>
    </PageContainer>
  );
};

export default HelloWorld;

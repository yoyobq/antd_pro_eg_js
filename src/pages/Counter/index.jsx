import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { useModel } from 'umi';

const Counter = () => {
  const { c, a, m } = useModel('counter', (ret) => ({
    c: ret.counter,
    a: ret.increment,
    m: ret.decrement,
  }));

  return (
    <PageContainer>
      <Card>
        <h2>{c}</h2>
        <button onClick={a}>add by 1</button>
        <button onClick={m}>minus by 1</button>
      </Card>
    </PageContainer>
  );
};

export default Counter;

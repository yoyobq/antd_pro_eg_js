import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card } from 'antd';
import { useModel } from 'umi';
// import styles from './Welcome.less'; // 样式部分暂时不用

const RouteTest = (props) => {
  console.log('下一行是 props.match');
  console.log(props.match);
  console.log('下一行是 props.location');
  console.log(props.location);
  console.log('下一行是 props.history');
  console.log(props.history);
  console.log('下一行是 props.route');
  console.log(props.route);

  return (
    <PageContainer>
      <Card>
        <h2>props.match 当前路由和 url match 后的对象</h2>
        <p>{JSON.stringify(props.match)}</p>
      </Card>
      <Card>
        <h2>props.location 表示应用当前处于哪个位置</h2>
        <p>{JSON.stringify(props.location)}</p>
      </Card>
      <Card>
        <h2>props.history</h2>
        <div>{JSON.stringify(props.history)}</div>
      </Card>
      <Card>
        <h2>props.route 当前路由配置</h2>
        <div>{JSON.stringify(props.route)}</div>
      </Card>
      {/* <Card>
        <h2>props.routes</h2>
        <div>{JSON.stringify(props.routes)}</div>
      </Card> */}
      {/* props.routes 内容太多不展示 */}
      <Card>
        <h3>请注意观察控制台里的输出，有更方便阅读的 props 对象输出。</h3>
      </Card>
    </PageContainer>
  );
};

export default RouteTest;

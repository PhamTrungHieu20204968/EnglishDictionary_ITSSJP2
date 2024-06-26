import React, { useEffect, useState } from 'react';

import Layout from '../../../components/Layout';
import { Col, Pagination, Row } from 'antd';
import axios from '../../../api/axios';
import Topic from '../components/Topic';
const ListTopics = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    axios
      .get('/topic')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <Layout page={'2'}>
      <div className="container mx-auto h-full flex flex-col">
        <div className="w-full text-center text-5xl font-semibold">
          List Topics
        </div>
        <Row gutter={[16, 16]} className="flex-1 mt-16">
          {data &&
            data?.map(
              (topic, index) =>
                index >= 9 * currentPage - 9 &&
                index < 9 * currentPage && (
                  <Col span={8} key={topic.id}>
                    <div className="flex items-center justify-center p-2">
                      <Topic topic={topic} />
                    </div>
                  </Col>
                )
            )}
        </Row>
        <Pagination
          className="w-full text-end mt-4 justify-self-end"
          defaultPageSize={9}
          total={data?.length || 1}
          current={currentPage}
          onChange={onChange}
        />
      </div>
    </Layout>
  );
};

export default ListTopics;

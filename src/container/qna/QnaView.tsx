'use client';
import React from 'react';
import { useState } from 'react';

type Qna = {
  id: number;
  content: string;
  status: string;
  date: string;
  reply: string;
  backgroundColor?: string;
};

const QnaView: React.FC = () => {
  const [visibleReplyId, setVisibleReplyId] = useState<number | null>(null);

  const inquiries: Qna[] = [
    {
      id: 35,
      content: '입금계좌 문의',
      status: '대기',
      date: '2024-09-05 23:34:06',
      reply: '',
    },
    {
      id: 5,
      content: '안녕하세요',
      status: '답변완료',
      date: '2024-08-19 05:51:50',
      reply: '안녕하세요\n유니온입니다',
      backgroundColor: '#e0ffe0',
    },
    // Add more inquiries as necessary
  ];

  const toggleReply = (id: number) => {
    setVisibleReplyId(visibleReplyId === id ? null : id);
  };

  const openModal = () => {
    // Handle modal opening logic
    console.log('Modal opened');
  };

  return (
    <div className='content'>
    <div className="section dark">
      <div className="tb_cap">
        <div className="f_left">
          <p className="caption">문의 목록</p>
        </div>
      </div>
      <div className="tb_frm" id="noticetb-nouse">
        <table>
          <colgroup>
            <col style={{ width: '75%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">내용</th>
              <th scope="col" style={{ minWidth: '100px' }}>
                답변
              </th>
              <th scope="col" style={{ minWidth: '100px' }}>
                등록일
              </th>
            </tr>
          </thead>
          <tbody id="inquiryTable">
            {inquiries.map((inquiry) => (
              <React.Fragment key={inquiry.id}>
                <tr
                  onClick={() => toggleReply(inquiry.id)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: inquiry.backgroundColor || 'transparent',
                  }}
                >
                  <td className="lt">
                    <div className="subject ty1 notice">
                      <span className="txtcut" style={{ color: 'black' }}>
                        {inquiry.content}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span style={{ color: inquiry.status === '대기' ? 'red' : 'green' }}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="w425_hide">{inquiry.date}</td>
                </tr>
                {visibleReplyId === inquiry.id && (
                  <tr>
                    <td
                      colSpan={3}
                      style={{
                        padding: '20px',
                        borderTop: '1px solid #B3B3B3',
                        backgroundColor: '#202028',
                      }}
                    >
                      <div
                        className="input"
                        style={{
                          backgroundColor: 'white',
                          width: '100%',
                          padding: '5px',
                          color: 'black',
                          textAlign: 'left',
                        }}
                      >
                        {inquiry.reply.split('\n').map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div id="front_paginate" className="btnset ct"></div>
      <div className="btnset rt">
        <button type="button" className="btn submit" onClick={openModal}>
          글 등록
        </button>
      </div>
    </div>
    </div>
  );
};

export default QnaView;

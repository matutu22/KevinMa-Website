/**
 * Created by machenhan on 2017/12/18.
 */
import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} height='64px' width='64px' />
);

export default Loading;
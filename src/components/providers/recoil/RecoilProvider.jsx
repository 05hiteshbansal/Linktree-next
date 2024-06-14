"use client"
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const RecoilProvider = ({children}) => {
  return (
    <RecoilRoot>{children}</RecoilRoot>
  )
}

export default RecoilProvider



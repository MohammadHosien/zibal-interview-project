'use client';
import React, { ReactNode } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';

const AntdStyledComponentsRegistry=({ children }:{children:ReactNode})=> {
  const [cache] = React.useState(() => createCache());
  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}></style>
  ));
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}

export default AntdStyledComponentsRegistry
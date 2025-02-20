import { PropsWithChildren } from 'react';
import { useSearchParams } from 'react-router';

import { QueryStringContext } from '@contexts';

type Props = PropsWithChildren;

const QueryStringProvider = ({ children }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageString = searchParams.get('page');

  const query = searchParams.toString();
  const text = searchParams.get('text');
  const page = pageString ? parseInt(pageString) - 1 : 0;
  const status = searchParams.get('status');
  const id = searchParams.get('id');

  const setTextQuery = (value?: string) => {
    setSearchParams((prev) => {
      prev.delete('page');

      if (!value) {
        prev.delete('text');
        return prev;
      }

      prev.set('text', value);
      return prev;
    });
  };

  const setPageQuery = (value?: string | number) => {
    setSearchParams((prev) => {
      if (!value) {
        prev.delete('page');
        return prev;
      }

      prev.set('page', `${value}`);
      return prev;
    });
  };

  const setIdQuery = (value?: string) => {
    setSearchParams((prev) => {
      if (!value) {
        prev.delete('id');
        return prev;
      }

      prev.set('id', value);
      return prev;
    });
  };

  const value = {
    query,
    text,
    page,
    status,
    id,
    setIdQuery,
    setTextQuery,
    setPageQuery,
  };

  return <QueryStringContext value={value}>{children}</QueryStringContext>;
};
export default QueryStringProvider;

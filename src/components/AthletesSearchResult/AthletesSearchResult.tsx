import { ComponentPropsWithRef } from 'react';

import { getAthletes } from '@api';
import {
  PaginationControls,
  SearchResultList,
  SearchResultTitle,
  SearchStatus,
  ShowMoreResults,
} from '@components';
import { Paths } from '@enums';
import { useFetchEntities } from '@hooks';
import { QueryParams } from '@types';

type Props = ComponentPropsWithRef<'div'> & {
  params: QueryParams;
  paginated?: boolean;
};

const AthletesSearchResults = ({
  className = '',
  params,
  paginated = false,
}: Props) => {
  const { content, pagination, loading } = useFetchEntities(
    getAthletes,
    params
  );

  let status: string;

  if (loading) {
    status = 'Searching...';
  } else {
    status = !pagination.totalElements
      ? 'Nothing found'
      : pagination.totalElements <= 5
        ? 'No more results available'
        : '';
  }

  return (
    <div className={`divide-y-2 divide-blue-700 ${className}`}>
      {!paginated && <SearchResultTitle title="Athletes" />}
      <SearchResultList result={content} />

      {status && <SearchStatus status={status} />}
      {!status && paginated && <PaginationControls {...pagination} />}
      {!status && !paginated && <ShowMoreResults path={Paths.athletes} />}
    </div>
  );
};
export default AthletesSearchResults;

import Select from '@/components/Select/Select';
import getMyActivities from '@/apis/myActivitiesApi';
import { useQuery } from '@tanstack/react-query';
// import { useState } from 'react';

export default function SelectCon() {
  // const [options, setOptions] = useState([]);
  const { data, isLoading } = useQuery({
    queryKey: ['myActivities'],
    queryFn: () => getMyActivities(),
  });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  console.log(data);
  const dataArray = Object.values(data) as any[];
  console.log(dataArray);
  const options = dataArray[0];
  console.log(options);
  return <Select options={options} />;
}

// .map((item: any) => item.title);

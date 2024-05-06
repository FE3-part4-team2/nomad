import Select from '@/components/Select/Select';
import getMyActivities from '@/apis/myActivitiesApi';
import { useQuery } from '@tanstack/react-query';

export default function SelectCon() {
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
  const options = dataArray[0].map((item: any) => item.title);
  console.log(options);
  return <Select options={options} />;
}

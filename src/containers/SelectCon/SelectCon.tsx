// import Select from '@/components/Select/Select';
// import getMyActivities from '@/apis/myActivitiesApi';
// import { useQuery } from '@tanstack/react-query';

// export default function SelectCon() {
//   const { data, isLoading } = useQuery({
//     queryKey: ['myActivities'],
//     queryFn: () => getMyActivities(),
//   });

//   if (isLoading || !data) {
//     return <div>Loading...</div>;
//   }

// //   const options = data.map(activity => ({
// //     value: activity.id,
// //     label: activity.name,
// //   }));
//   return <Select options={options} />;
// }

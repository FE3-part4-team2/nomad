import Cal from 'react-calendar';
import moment from 'moment';

export default function Calendar({
  fun,
  className,
}: {
  fun: any;
  className: string;
}) {
  return (
    <div>
      <Cal
        locale="ko-KR" //showNeighboringMonth={false}
        calendarType="gregory"
        formatDay={(locale, date) => moment(date).format('D')}
        onActiveStartDateChange={fun}
        className={className}
      />
    </div>
  );
}

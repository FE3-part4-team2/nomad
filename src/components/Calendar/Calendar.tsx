import Cal, { OnArgs } from 'react-calendar';
import moment from 'moment';

export default function Calendar({
  monthReceiver,
  data,
  onClick,
}: {
  monthReceiver: ({ action, activeStartDate, value, view }: OnArgs) => void;
  data: [
    {
      date: string;
      reservations: { completed: number; confirmed: number; pending: number };
    },
  ];
  onClick: (value: Date) => void;
}) {
  return (
    <div>
      <Cal
        locale="ko-KR" //showNeighboringMonth={false}
        calendarType="gregory"
        formatDay={(locale, date) => moment(date).format('D')}
        onActiveStartDateChange={monthReceiver}
        tileContent={({ date, view }) => {
          if (view == 'month' && data && data.length > 0) {
            const content = data.map((element) => {
              if (moment(date).format('YYYY-MM-DD') == element.date) {
                const { completed, confirmed, pending } = element.reservations;
                const nonZeroValues = Object.entries({
                  completed,
                  confirmed,
                  pending,
                }).filter(([value]) => value !== '0');
                console.log(nonZeroValues);
                return (
                  <>
                    <div
                      key={`${element.date}+dot`}
                      className={`${
                        nonZeroValues.some((item) => item[0] == 'completed')
                          ? 'blackDot'
                          : 'blueDot'
                      }`}
                    />
                    <div key={element.date} className="colorBox">
                      {nonZeroValues.map((item) => {
                        // Wrap the arrow function inside parentheses
                        return (
                          <div
                            className={`${
                              item[0] == 'completed'
                                ? 'gray'
                                : item[0] == 'confirmed'
                                  ? 'orange'
                                  : item[0] == 'pending'
                                    ? 'blue'
                                    : ''
                            }`}
                            key={element.date + item[0]}
                          >{`${item[0] == 'completed' ? '완료' : item[0] == 'confirmed' ? '승인' : item[0] == 'pending' ? '예약' : ''} ${item[1]}`}</div>
                        );
                      })}
                    </div>
                  </>
                );
              }
              return null;
            });
            return content;
          }
        }}
        onClickDay={onClick}
      />
    </div>
  );
}

titleContent={({ date, view }: any) => {
    if (
    view == 'month' &&
    mark.find((x) => x === moment(date).format('YYYY-MM-DD'))
    )
    return (
    <>
    <div
    style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    }}
    >
    <div
    style={{
    height: '8px',
    width: '8px',
    backgroundColor: 'red',
    borderRadius: '50%',
    }}
    >
    asdasd
    </div>
    </div>
    </>
    );
    }}
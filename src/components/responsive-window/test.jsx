import useResponsiveWindow from '.';

const UseResponsiveWindowTest = () => {
    const windowSize = useResponsiveWindow();
    const { width, height } = windowSize;

    return (
        <div>
            <h1>Use Responsive Window Hook</h1>
            <p>
                Width is {width}
            </p>
            <p>
                Height is {height}
            </p>
        </div>
    );
};

export default UseResponsiveWindowTest;
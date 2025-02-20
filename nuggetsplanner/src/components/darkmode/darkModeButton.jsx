import { useDispatch, useSelector } from "react-redux";
import { setLightMode, setDarkMode } from "../../store/darkmodeSlice";

function DarkModeToggle() {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.darkMode.value);

    // Uppdatera body-klassen när darkMode ändras
    // useEffect(() => {
    //     if (isDarkMode) {
    //         document.body.classList.add("dark-mode");
    //     } else {
    //         document.body.classList.remove("dark-mode");
    //     }
    // }, [isDarkMode]);

    const handleToggle = () => {
        if (isDarkMode) {
            dispatch(setLightMode());
            document.body.classList.remove("dark-mode");
        } else {
            dispatch(setDarkMode());
            document.body.classList.add("dark-mode");
        }
    };

    return (
        <button onClick={handleToggle}>
            {isDarkMode ? "Ljust läge" : "Mörkt läge"}
        </button>
    );
}

export default DarkModeToggle;

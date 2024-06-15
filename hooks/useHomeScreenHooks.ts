import {useState, useRef, useEffect} from 'react';
import {
  Animated,
  Keyboard,
  PanResponder,
  useWindowDimensions,
  TextInput,
} from 'react-native';

const useHomeScreenHooks = (
  initialHeight: number,
  stopFieldHeight: number,
  locationSectionHeight: number,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [addStopVisible, setAddStopVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isPanResponderEnabled, setIsPanResponderEnabled] = useState(true);
  const {height: screenHeight, width: screenWidth} = useWindowDimensions();
  const sidebarWidth = screenWidth * 0.8; // 80% of the screen width
  const animatedHeight = useRef(new Animated.Value(initialHeight)).current; // Initial height of the bottom section
  const animatedOpacity = useRef(new Animated.Value(1)).current; // Initial opacity of the button
  const animatedTopSection = useRef(new Animated.Value(-50)).current; // Initial position of the top section
  const animatedSidebar = useRef(new Animated.Value(-sidebarWidth)).current; // Initial position of the sidebar
  const addStopInputRef = useRef<TextInput | null>(null); // Ref for the additional TextInput
  const searchInputRef = useRef<TextInput | null>(null); // Ref for the search TextInput
  const currentHeight = useRef(initialHeight);

  useEffect(() => {
    const listenerId = animatedHeight.addListener(({value}) => {
      currentHeight.current = value;
    });

    return () => {
      animatedHeight.removeListener(listenerId);
    };
  }, [animatedHeight]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        const newHeight = initialHeight - gestureState.dy;
        animatedHeight.setValue(newHeight);
      },
      onPanResponderRelease: (evt, gestureState) => {
        const thresholdHeight = screenHeight * 0.7; // 70% of the screen height
        if (currentHeight.current < thresholdHeight) {
          Animated.timing(animatedHeight, {
            toValue: initialHeight,
            duration: 300,
            useNativeDriver: false,
          }).start();
        } else {
          setIsFocused(true);
        }
      },
    }),
  ).current;

  useEffect(() => {
    let toValue = isFocused
      ? screenHeight - locationSectionHeight - 80
      : initialHeight;
    if (addStopVisible && isFocused) {
      toValue -= stopFieldHeight;
    }
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animatedOpacity, {
        toValue: isFocused ? 0 : 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animatedTopSection, {
        toValue: isFocused ? 0 : -300,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsPanResponderEnabled(!isFocused); // Disable panResponder when focused
      if (isFocused) {
        if (addStopVisible && addStopInputRef.current) {
          addStopInputRef.current.focus();
        } else if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    });
  }, [isFocused, screenHeight, initialHeight, addStopVisible]);

  const handlePress = () => {
    setIsFocused(true); // Update state first
    let toValue = screenHeight - locationSectionHeight;
    if (addStopVisible) {
      toValue -= stopFieldHeight;
    }
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animatedTopSection, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsPanResponderEnabled(false); // Disable panResponder after animation
      if (addStopVisible && addStopInputRef.current) {
        addStopInputRef.current.focus();
      } else if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    });
  };

  const handleCollapse = () => {
    Keyboard.dismiss(); // Hide the keyboard
    setIsFocused(false);
  };

  const handleAddStop = () => {
    setAddStopVisible(true);
    setFocusedInput('addStop');
  };

  const handleRemoveStop = () => {
    setAddStopVisible(false);
    setFocusedInput(null);
  };

  const toggleSidebar = () => {
    Animated.timing(animatedSidebar, {
      toValue: sidebarVisible ? -sidebarWidth : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setSidebarVisible(!sidebarVisible);
  };

  return {
    isFocused,
    addStopVisible,
    focusedInput,
    sidebarVisible,
    screenHeight,
    screenWidth,
    animatedHeight,
    animatedOpacity,
    animatedTopSection,
    animatedSidebar,
    addStopInputRef,
    searchInputRef,
    panResponder,
    isPanResponderEnabled,
    setFocusedInput,
    handlePress,
    handleCollapse,
    handleAddStop,
    handleRemoveStop,
    toggleSidebar,
  };
};

export default useHomeScreenHooks;

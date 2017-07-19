import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Slider,
    Picker,
    Alert,
    Image,
    StyleSheet
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            random: null,
            pool: 1,
            amount: 1
        };
    }

    generateRandomNumber = () => {
        if(this.state.amount > this.state.pool) {
            Alert.alert("Error", "The pool must not be smaller than the amount of numbers you want to generate!");
            return;
        }

        // build the pool of numbers
        var pool = [];
        for(let i = 1; i <= this.state.pool; i++) {
            pool.push(i);
        }
        
        // generate random numbers
        var randomString = '';
        for(let i = 1; i <= this.state.amount; i++) {
            let index = Math.floor(Math.random() * pool.length);
            let random = pool[index];
            pool.splice(index, 1);
            randomString = randomString + (randomString ? ", " : "") + random;
        }
        this.setState({random: randomString});
    }

    render() {
        return (
            <Image source={require('./background.png')} style={styles.container}>
                <Text style={styles.textTitle}>Random Numbers</Text>
                <Text style={styles.text}>Pool of numbers:</Text>
                <Text style={styles.text}>{this.state.pool}</Text>
                <Slider 
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={100}
                    onValueChange={(value) => this.setState({pool: Math.round(value)})}
                    minimumTrackTintColor="#a0a0a0"
                    maximumTrackTintColor="#a0a0a0"
                    thumbTintColor="#ff0000"
                    thumbImage={require('./thumb.png')}
                />
                <Text style={styles.resultText}>{this.state.random}</Text>
                <Picker
                    selectedValue={this.state.amount}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    onValueChange={(itemValue, itemIndex) => this.setState({amount: itemValue})}>
                    <Picker.Item label="1" value="1" color="#FF6600" />
                    <Picker.Item label="2" value="2" color="#FF6600" />
                    <Picker.Item label="3" value="3" color="#FF6600" />
                    <Picker.Item label="4" value="4" color="#FF6600" />
                    <Picker.Item label="5" value="5" color="#FF6600" />
                    <Picker.Item label="6" value="6" color="#FF6600" />
                    <Picker.Item label="7" value="7" color="#FF6600" />
                    <Picker.Item label="8" value="8" color="#FF6600" />
                    <Picker.Item label="9" value="9" color="#FF6600" />
                    <Picker.Item label="10" value="10" color="#FF6600" />
                </Picker>
                <TouchableOpacity onPress={this.generateRandomNumber}>
                    <Image style={styles.button} source={require('./button.png')}>
                        <Text style={styles.buttonText}>Generate!</Text>
                    </Image>
                </TouchableOpacity>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: null,
        height: null
    },
    textTitle: {
        color: '#ffffff',
        backgroundColor: '#00000000',
        fontSize: 28
    },
    text: {
        color: '#ffffff',
        backgroundColor: '#00000000'
    },
    resultText: {
        color: '#ffffff',
        backgroundColor: '#00000000',
        fontSize: 18
    },
    slider: {
        width: '100%'
    },
    picker: {
        width: '100%',
        backgroundColor: '#000000C0',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000'
    },
    pickerItem: {
        color: '#ffffff'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 175,
        height: 60
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        backgroundColor: '#00000000'
    }
});


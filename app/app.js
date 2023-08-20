export function putOnRack(testScenario){
    switch(testScenario){
        case 1:
            return 'Test tube placed on rack 1';
            break;
        case 2:
            return 'Test tube placed on rack 2'
            break;
        case 3:
            return 'Sorry, no rack is available'
            break;
        default:
            return 'Ups...an error occured!'
            break;

    }

}

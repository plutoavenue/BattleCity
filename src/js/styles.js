import { defaultParams } from './params'

export const welcomePage = {
    position: 'absolute',
    height: 100 + 'vh',
    width: 100 + 'vw',
    backgroundColor: defaultParams.fieldColor,

}
export const welcomePageImg = {
    display: 'block',
    margin: 0 + ' auto',
    marginTop: 8 + '%',
    width: 60 + '%',
}
export const gameField = {
   // width: defaultParams.fieldWidth + 'px',
   // height: defaultParams.fieldHeight + 'px',
    height: 100 + 'vh',
    width: 100 + 'vw',
    backgroundColor: defaultParams.fieldColor,
    cursor: 'crosshair',
    position: 'relative',
}

export const panelStyle = {
    textAlign: 'center',
   // fontSize: '30px',
    backgroundColor: defaultParams.fieldColor,
    paddingTop: '40px',
    paddingBottom: '30px',
    marginTop: '60px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export const messageStyle = {
    textAlign: 'center',
    fontSize: '35px',
    color: 'white',
    display: 'block',
    margin: 0 + ' auto',
    marginTop: 5 + '%',

}


export const makeTargetStyle = ({ xpos, ypos, fired }) => {
    return {
        width: defaultParams.targetWidth,
        height: defaultParams.targetHeight,
        backgroundColor: fired ? defaultParams.targetColor2 : defaultParams.targetColor1,
        boxShadow: fired ? defaultParams.targetShadow2 : defaultParams.targetShadow1,
        borderRadius: defaultParams.targetBorderRadius1,
        position: 'absolute',
        top: ypos,
        left: xpos,
    }
}
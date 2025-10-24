import { StyleSheet } from "react-native";
import { primaryBlack, primaryWhite } from "../assets";

export default globle_style = StyleSheet.create({


    // GLOBLE BUTTON 
    gbl_btn: {
        // width: '100%',
        height: 54,
        borderRadius: 12,
        color: '#151515',
        textAlign: 'center',
        backgroundColor: '#22BCE24D',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Poppins-SemiBold',
        paddingVertical: 16,
    },
    white_btn: {
        backgroundColor: '#fff',
        color: '#22BCE2',
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        borderWidth: 1,
        borderColor: '#22BCE2',
        fontSize: 9,
        borderRadius: 8,
        width: '100%',
        height: 28
    },

    gbl_Act_Btn: {
        color: "#FFFFFF",
        backgroundColor: '#22BCE2'
    },
    blue_btn: {
        color: '#fff',
        backgroundColor: '#22BCE2',
        height: 28,
        borderRadius: 5,
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '500',
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
        paddingVertical:5,
        paddingHorizontal:24
    },
    // UPLOAD BUTTON 
    upload_btn: {
        width: '100%',
        height: 28,
        backgroundColor: '#22BCE2',
        fontSize: 9,
        fontWeight: '500',
        fontFamily: 'poppins-Medium',
        color: '#fff',
        lineHeight: 13.5,
        borderRadius: 8
    },

    // GLOBLE INPUTS 

    gbl_input: {
        width: '100%',
        height: 54,
        color: primaryBlack,
        backgroundColor: '#EEEEEE',
        fontSize: 13,
        lineHeight: 19,
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        borderRadius: 12,
        paddingLeft: 17,
        color : primaryBlack
    },

    gbl_frm_lbl: {
        fontSize: 14,
        color: '#151515',
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 10,
        lineHeight: 21,
    },

    gbl_act_input: {
        color: '#151515',
    },

    // ERRORS 
    errors: {
        color: '#E90000',
    },






    //SplashScreen
    splashContainer : {
        backgroundColor : primaryWhite,
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    spBody : {
        justifyContent : 'center',
        alignItems : 'center',
        
    },
    spImg : {
        width : '100%',
        resizeMode : 'contain'
    },
    spTitle : {
        color: '#151515',
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        fontSize : 14
    },



    // login screen page 
    gradient: {
        flex: 1
    },
    login_sec: {
        backgroundColor: "#fff"
    },
    login_hd: {
        marginTop: 85,
        marginBottom: 79
    },

    login_hd_txt: {
        fontSize: 30,
        lineHeight: 45,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        fontWeight: '700',
        color: '#fff'
    },
    login_para_txt: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        color: '#fff'
    },

    bar: {
        height: 68,
        backgroundColor: '#73CEE4',
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        marginHorizontal: 15
    },
    login_frm_sec: {
        backgroundColor: '#fff',
        marginTop: -50,
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        height: '100%'
    },
    frm_fld: {
        marginHorizontal: 20,
        marginTop: 59
    },
    frm_con: {
        marginBottom: 20
    },

    password: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    for_pass: {
        marginBottom: 33
    },
    frm_con_txt: {
        fontSize: 13,
        lineHeight: 19.5,
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        textAlign: 'right',
        color: '#22BCE2'
    },

    // forgot password screen start here
    frgt_pass_sec: {
        backgroundColor: '#fff',
        flex: 1,
        height: '100%',
    },
    forgt_hd: {
        marginTop: 114,
        marginBottom: 30
    },
    forgt_hd_txt: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 25.5,
        textAlign: 'center',
        color: '#151515',
        marginBottom: 12
    },
    forgt_hd__para: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        lineHeight: 19.5,
        textAlign: 'center',
        color: '#6D6D6D',
    },
    frgt_pass_fld: {
        marginTop: 0
    },

    // otp screen page start here 

    otp_sec: {
        backgroundColor: '#fff',
        flex: 1,
        height: '100%',
    },

    opt_con: {
        marginBottom: 20
    },
    opt_itm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    otp_lst: {
        width: 54,
        height: 54,
        borderRadius: 8,
        backgroundColor: '#F4F4F4',
        marginRight: 14
    },
    otp_lst_txt: {
        fontSize: 13,
        lineHeight: 19.5,
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        paddingTop: 17,
        color: '#151515'
    },
    otp_rsnd: {
        fontSize: 13,
        lineHeight: 19.5,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 30
    },
    span_resnd: {
        color: '#22BCE2',
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold'
    },
    // password reset successfully
    paswrd_reset: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : primaryWhite,
        width: '84%',
        borderRadius: 14,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    reset_img: {
        marginBottom: 30,
    },
    rest_txt: {
        marginBottom: 30
    },
    reset_btn: {
        width: '100%',
        paddingHorizontal: 20,
    },



    // reset password screen start here 
    set_paswrd_con: {
        marginTop: 0
    },
    rest_paswrd_fld: {
        marginTop: 0
    },


    // dashbord screen start here 


    dashbrd_sec: {
        width: '100%',
        height: 249,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        flex:1

    },
    header: {
        marginTop: 18,
        marginBottom: 35,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },


    notfy: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    rednotfy: {
        position: 'absolute',
        left: 10,
        top: 5
    },
    search: {
        height: 52,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        borderRadius: 8,
        paddingLeft: 46,
        marginBottom: 20,
    },
    serch_img: {
        position: 'absolute',
        left: 18,
        top: 17
    },
    sub_tpic_sec: {
        marginHorizontal: 15
    },
    sub_tpic_con: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        marginBottom:10
    },
    topic_hd: {
        backgroundColor: '#22BCE2',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        height: 36,
        paddingLeft: 17
    },
    topic_hdtxt: {
        color: '#FFFFFF',
        fontSize: 13,
        lineHeight: 19.5,
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        paddingVertical: 8
    },
    sub_name_sec:{
        backgroundColor:'#ffff',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        paddingHorizontal: 17,
    },
    sub_name: {
       borderBottomWidth:1,
       borderColor: '#EFEFEF',
        paddingTop: 10,
        paddingBottom: 37,
    },
    sub_name_con: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,

    },
    sub_name_txt: {
        fontSize:12,
        color:'#6D6D6D',
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
    },
    facuty:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:12
    },
    facuty_txt:{
        fontSize:12,
        color:'#22BCE2',
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
    },
    facuty_tm_txt:{
        fontSize:12,
        color:'#6D6D6D',
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
    },
})
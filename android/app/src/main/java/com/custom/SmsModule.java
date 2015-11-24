package com.custom;

import android.telephony.SmsManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;




/**
 * Created by zhangsailei on 15/11/24.
 */
public class SmsModule extends ReactContextBaseJavaModule {
    public SmsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Override
    public String getName() {
        return "SmsModule";
    }
    @ReactMethod
    public void send(String phoneNo, String sms, Callback success,Callback err) {
        try {
            SmsManager.getDefault().sendTextMessage(phoneNo, null, sms, null, null);
            success.invoke();
        } catch (Exception e) {
            err.invoke(e.getMessage());
        }
    }
}

package com.rnpolymerpo;

import com.facebook.react.ReactActivity;
import com.pgyersdk.feedback.PgyFeedbackShakeManager;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RNPolymerPo";
    }

    @Override
    protected void onResume() {
        // TODO Auto-generated method stub
        super.onResume();

        if (!BuildConfig.DEBUG) {
            // 自定义摇一摇的灵敏度，默认为950，数值越小灵敏度越高。
            PgyFeedbackShakeManager.setShakingThreshold(1000);

            // 以对话框的形式弹出
            PgyFeedbackShakeManager.register(MainActivity.this);

            // 以Activity的形式打开，这种情况下必须在AndroidManifest.xml配置FeedbackActivity
            // 打开沉浸式,默认为false
            // FeedbackActivity.setBarImmersive(true);
            // PgyFeedbackShakeManager.register(MainActivity.this, false);
        }
    }

    @Override
    protected void onPause() {
        // TODO Auto-generated method stub
        super.onPause();
        if (!BuildConfig.DEBUG) {
            PgyFeedbackShakeManager.unregister();
        }
    }
}

//
//  RNMail.h
//  SaiCustomModule
//
//  Created by 张赛磊 on 15/11/25.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"

@interface RNMail : NSObject <RCTBridgeModule, MFMailComposeViewControllerDelegate>

@end
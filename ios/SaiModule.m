//
//  SaiModule.m
//  SaiCustomModule
//
//  Created by 张赛磊 on 15/11/24.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "SaiModule.h"
#import <MessageUI/MessageUI.h>
#import "RCTConvert.h"
#import "RCTLog.h"

@implementation SaiModule


- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()
RCT_EXPORT_METHOD(open:(NSDictionary *)options)
{
  // Your implementation here
  NSString *shareText = [RCTConvert NSString:options[@"share_text"]];
  NSString *shareUrl = [RCTConvert NSString:options[@"share_URL"]];
  
  NSArray *itemsToShare = @[shareText, shareUrl];
  UIActivityViewController *activityVC = [[UIActivityViewController alloc] initWithActivityItems:itemsToShare applicationActivities:nil];
  /*activityVC.excludedActivityTypes = @[UIActivityTypePostToWeibo,
   UIActivityTypeMessage,
   UIActivityTypeMail,
   UIActivityTypePrint,
   UIActivityTypeCopyToPasteboard,
   UIActivityTypeAssignToContact,
   UIActivityTypeSaveToCameraRoll,
   UIActivityTypeAddToReadingList,
   UIActivityTypePostToFlickr,
   UIActivityTypePostToVimeo,
   UIActivityTypePostToTencentWeibo,
   UIActivityTypeAirDrop];*/
  UIViewController *root = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
  [root presentViewController:activityVC animated:YES completion:nil];
}

@end

/* CookTogether optional notification click handler. Not a background alarm scheduler. */
self.addEventListener('notificationclick',event=>{
  event.notification.close();
  event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(async openPages=>{
    const page=openPages.find(client=>client.url.startsWith(self.registration.scope));
    if(page)return page.focus();
    if(self.clients.openWindow)return self.clients.openWindow(self.registration.scope);
  }));
});

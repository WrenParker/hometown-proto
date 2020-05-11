from rest_framework import routers
from .api import BusinessViewSet

router = routers.DefaultRouter()
router.register('api/business', BusinessViewSet, 'business')

urlpatterns = router.urls
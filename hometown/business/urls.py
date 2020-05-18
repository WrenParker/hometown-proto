from rest_framework import routers
from .api import BusinessViewSet, KeywordViewSet, StoreFrontViewSet, InventoryViewSet

router = routers.DefaultRouter()
router.register(r'api/business', BusinessViewSet, 'business')
router.register(r'api/keywords', KeywordViewSet, 'keywords')
router.register(r'api/storefront', StoreFrontViewSet, 'storefront')
router.register(r'api/inventory', InventoryViewSet, 'inventory')

urlpatterns = router.urls
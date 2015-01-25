describe('when loaded', function() {
    var ctrl, $scope;
    beforeEach(module('generation'));
    beforeEach(inject(function($controller, $injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        ctrl = $controller('appController', { $scope: $scope });
    }));
    it('should run', function() {
        expect(true).toBe(true);
    });

    describe('initialize the cell grid and first generation', function() {
        it('should call a function to initialize', function() {
            spyOn($scope,'init');
            $scope.init();
            expect($scope.init).toHaveBeenCalled();
        });
        it('should start with the current generation being 1', function() {
            $scope.init();
            expect($scope.currentGeneration).toBe(1);
        });
        it('should make an array of cells', function() {
            $scope.init();
            expect(Array.isArray($scope.cells)).toBe(true);
        });
        it('should make a 10x10 "grid" using x,y coordinates for each cell', function() {
            $scope.init();
            var oneHundred = $scope.cells.filter(function(elem) {
                return elem.x == 9 && elem.y == 9;
            });
            expect(typeof oneHundred[0]).toBe('object');
        });
        it('should randomly set at least some of the cells to alive', function() {
            $scope.init();
            var alives = $scope.cells.filter(function(elem) {
                return elem.alive;
            });
            expect(alives.length).toBeGreaterThan(0);
        });
        it('should count the number of cells that are alive', function() {
            spyOn($scope,'countAlive');
            $scope.init();
            expect($scope.countAlive).toHaveBeenCalled();
        });
    });

    describe('count the number of cells that are alive', function() {
        beforeEach(function() {
            $scope.init();
        });
        it('should call a function to do the count', function() {
            spyOn($scope,'countAlive');
            $scope.countAlive();
            expect($scope.countAlive).toHaveBeenCalled();
        });
        it('should filter the cells array for individuals that are alive', function() {
            spyOn($scope.cells,'filter');
            $scope.countAlive();
            expect($scope.cells.filter).toHaveBeenCalled();
        });
        it('should set a value to $scope.alive', function() {
            $scope.countAlive();
            expect($scope.alive).toBeDefined();
        });
    });
});
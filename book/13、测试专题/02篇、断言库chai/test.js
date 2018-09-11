const chai = require('chai');
const expect = chai.expect;    // Using Expect style

describe('main', function () {
    describe('前端自动化测试之chai.js断言库', function () {
        describe('any/all', function () {
            it('any:用于检测该参数是否与实际值所对应的构造函数相匹配,在keys断言之前使用any标记（与all相反）', function () {
                expect({bar: 'bar', baz: 'baz'}).to.have.all.keys('bar', 'baz')
            });
            // 前有后面keys中之一就成立
            it('all:在keys断言之前使用all标记（与any相反）', function () {
                expect({bar: 'bar', yanle: 'lelele'}).to.have.any.keys('bar', 'baz')
            });
        });

        describe('a(type) / .an(type)： 用来断言变量类型', function () {
            it('should string', function () {
                expect('test').to.be.an('string');
            });
            it('should object', function () {
                expect({
                    foo: 'bar'
                }).to.be.an('object')
            });
            it('should null', function () {
                expect(null).to.be.an('null')
            });
            it('should undefined', function () {
                expect(undefined).to.be.an('undefined')
            });
            it('should Error', function () {
                expect(new Error).to.be.an('error')
            });
            it('should float32array', function () {
                expect(new Float32Array).to.be.a('float32array')
            });
        });

        describe('include(value) / contains(value)：Object | String | Number，包含某个内容', function () {
            it('should include 2', function () {
                expect([1, 2, 3]).to.be.include(2);
            });
            it('should include bar', function () {
                expect('foobar').to.be.include('bar');
            });
            it('should include keys foo', function () {
                let le = expect({
                    foo: 'bar',
                    hello: 'universe'
                }).to.be.include.keys('foo');
            });
        });

        describe('not 跟在链式调用后面的否定断言', function () {
            it('should not equal bar', function () {
                expect({
                    foo: 'bar'
                }).to.not.equal({foo: 'bar'})
            });
            it('should not equal foo: bar', function () {
                expect({foo: 'baz'}).to.have.property('foo').and.not.equal('bar');
            });
        });

        describe('deep 用来深度比较2个对象,一般用在equal和property前面', function () {
            it('should deep equal baz', function () {
                expect({
                    foo: 'baz'
                }).to.deep.equal({foo: 'baz'})
            });
            it('should deep equal object foo', function () {
                expect({foo: {bar: {baz: 'quux'}}}).to.have.deep.equal({
                    foo: {bar: {baz: 'quux'}}
                });
            });
        });

        describe('ok 断言目标是否为真(只判断值是否为真，类似==，隐式转换)', function () {
            it('should be ok string', function () {
                expect('everything').to.be.ok;
            });
            it('should be ok 1', function () {
                expect(1).to.be.ok;
            });
            it('should not be ok', function () {
                expect(false).to.not.be.ok;
            });
        });

        describe('true/.false 断言目标是否为布尔值true,false（这里与ok的区别是不进行类型转换，只能为true/false才能通过断言）', function () {
            it('should be true', function () {
                expect(true).to.be.true;
            });
            it('should q to not be true', function () {
                expect(1).to.not.be.true;
            });
            it('should false to be false', function () {
                expect(false).to.be.false;
            });
            it('should 0 to not be false', function () {
                expect(0).to.not.be.false;
            });
        });

        describe('null 断言目标为null', function () {
            it('should null to be null', function () {
                expect(null).to.be.null;
            });
            it('should undefined not to be null', function () {
                expect(undefined).not.to.be.null;
            });
        });

        describe('undefined 断言目标为undefined', function () {
            it('should undefined to be undefined', function () {
                expect(undefined).to.be.undefined;
            });
            it('should null not to be undefined', function () {
                expect(null).not.to.be.undefined;
            });
        })
    })
});
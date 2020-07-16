using FastTransforms, Test
import FastTransforms: clenshaw, clenshaw!, forwardrecurrence!, forwardrecurrence

@testset "clenshaw" begin
    @testset "Chebyshev" begin
        c = [1,2,3]
        cf = float(c)
        @test @inferred(clenshaw(c,1)) ≡ 1 + 2 + 3
        @test @inferred(clenshaw(c,0)) ≡ 1 + 0 - 3
        @test @inferred(clenshaw(c,0.1)) == 1 + 2*0.1 + 3*cos(2acos(0.1))
        @test @inferred(clenshaw(c,[-1,0,1])) == clenshaw!(c,[-1,0,1]) == [2,-2,6]
        @test clenshaw(c,[-1,0,1]) isa Vector{Int}
        @test @inferred(clenshaw(Float64[],1)) ≡ 0.0

        x = [1,0,0.1]
        @test @inferred(clenshaw(c,x)) ≈ @inferred(clenshaw!(c,copy(x))) ≈ 
            @inferred(clenshaw!(c,x,similar(x))) ≈
            @inferred(clenshaw(cf,x)) ≈ @inferred(clenshaw!(cf,copy(x))) ≈ 
            @inferred(clenshaw!(cf,x,similar(x))) ≈ [6,-2,-1.74]
    end

    @testset "Chebyshev-as-general" begin
        @testset "forwardrecurrence!" begin
            N = 5
            A, B, C = [1; fill(2,N-2)], fill(0,N-1), fill(1,N)
            Af, Bf, Cf = float(A), float(B), float(C)
            @test forwardrecurrence(N, A, B, C, 1) == forwardrecurrence!(Vector{Int}(undef,N), A, B, C, 1) == ones(Int,N)
            @test forwardrecurrence!(Vector{Int}(undef,N), A, B, C, -1) == (-1) .^ (0:N-1)
            @test forwardrecurrence(N, A, B, C, 0.1) ≈ forwardrecurrence!(Vector{Float64}(undef,N), A, B, C, 0.1) ≈ cos.((0:N-1) .* acos(0.1))
        end

        c, A, B, C = [1,2,3], [1,2,2], fill(0,3), fill(1,4)
        cf, Af, Bf, Cf = float(c), float(A), float(B), float(C)
        @test @inferred(clenshaw(c, A, B, C, 1)) ≡ 6
        @test @inferred(clenshaw(c, A, B, C, 0.1)) ≡ -1.74
        @test @inferred(clenshaw([1,2,3], A, B, C, [-1,0,1])) == clenshaw!([1,2,3],A, B, C, [-1,0,1]) == [2,-2,6]
        @test clenshaw(c, A, B, C, [-1,0,1]) isa Vector{Int}
        @test @inferred(clenshaw(Float64[], A, B, C, 1)) ≡ 0.0

        x = [1,0,0.1]
        @test @inferred(clenshaw(c, A, B, C, x)) ≈ @inferred(clenshaw!(c, A, B, C, copy(x))) ≈ 
            @inferred(clenshaw!(c, A, B, C, x, one.(x), similar(x))) ≈
            @inferred(clenshaw!(cf, Af, Bf, Cf, x, one.(x),similar(x))) ≈
            @inferred(clenshaw([1.,2,3], A, B, C, x)) ≈ 
            @inferred(clenshaw!([1.,2,3], A, B, C, copy(x))) ≈ [6,-2,-1.74]
    end

    @testset "Legendre" begin
        @testset "Float64" begin
            N = 5
            n = 0:N-1
            A = (2n .+ 1) ./ (n .+ 1)
            B = zeros(N)
            C = n ./ (n .+ 1)
            v_1 = forwardrecurrence(N, A, B, C, 1)
            v_f = forwardrecurrence(N, A, B, C, 0.1)
            @test v_1 ≈ ones(N)
            @test forwardrecurrence(N, A, B, C, -1) ≈ (-1) .^ (0:N-1)
            @test v_f ≈ [1,0.1,-0.485,-0.1475,0.3379375]

            n = 0:N # need extra entry for C in Clenshaw
            C = n ./ (n .+ 1)
            for j = 1:N
                c = [zeros(j-1); 1]
                @test clenshaw(c, A, B, C, 1) ≈ v_1[j] # Julia code
                @test clenshaw(c, A, B, C, 0.1) ≈  v_f[j] # Julia code
                @test clenshaw!(c, A, B, C, [1.0,0.1], [1.0,1.0], [0.0,0.0])  ≈ [v_1[j],v_f[j]] # libfasttransforms
            end
        end

        @testset "BigFloat" begin
            N = 5
            n = BigFloat(0):N-1
            A = (2n .+ 1) ./ (n .+ 1)
            B = zeros(N)
            C = n ./ (n .+ 1)
            @test forwardrecurrence(N, A, B, C, parse(BigFloat,"0.1")) ≈ [1,big"0.1",big"-0.485",big"-0.1475",big"0.3379375"]
        end
    end

    @testset "Int" begin
        N = 10; A = 1:10; B = 2:11; C = range(3; step=2, length=N+1)
        v_i = forwardrecurrence(N, A, B, C, 1)
        v_f = forwardrecurrence(N, A, B, C, 0.1)
        @test v_i isa Vector{Int}
        @test v_f isa Vector{Float64}

        j = 3
        clenshaw([zeros(Int,j-1); 1; zeros(Int,N-j)], A, B, C, 1) == v_i[j]
    end
end
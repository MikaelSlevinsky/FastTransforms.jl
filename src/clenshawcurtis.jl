plan_clenshawcurtis(μ) = length(μ) > 1 ? FFTW.plan_r2r!(μ, FFTW.REDFT00) : ones(μ)'

"""
Compute nodes of the Clenshaw—Curtis quadrature rule.
"""
clenshawcurtisnodes(::Type{T}, N::Int) where T = T[cospi(k/(N-one(T))) for k=0:N-1]

"""
Compute weights of the Clenshaw—Curtis quadrature rule with modified Chebyshev moments of the first kind ``\\mu``.
"""
clenshawcurtisweights(μ::Vector) = clenshawcurtisweights!(copy(μ))
clenshawcurtisweights!(μ::Vector) = clenshawcurtisweights!(μ, plan_clenshawcurtis(μ))
function clenshawcurtisweights!(μ::Vector{T}, plan) where T
    N = length(μ)
    rmul!(μ, inv(N-one(T)))
    plan*μ
    μ[1] *= half(T); μ[N] *= half(T)
    return μ
end
